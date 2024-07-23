import { IUserRepo, IUserSignupRepo,DeleteUserResponse, NotFoundError } from '../../types';
import { User, UserModel } from './userModel';
import { AppLogger, extractRelativeFilePath } from '../../utils';
import { hashSync } from 'bcrypt';
import { UserEditRequest } from '../../api/v1/user/requests';
const crypto = require('crypto');
const nodemailer = require('nodemailer');

const logger = AppLogger.getLogger(extractRelativeFilePath(__filename));

export class UserRepository implements IUserRepo {
    constructor(private userModel: typeof UserModel) {}

    async userSignUp(userPayload: IUserSignupRepo): Promise<void> {
        await this.userModel.create({
            Email: userPayload.email,
            IPAddress: userPayload.IPAddress,
            Age: userPayload.age,
            Password: hashSync(userPayload.password, 8),
            SchemaVersion: 1,
            FirstName: userPayload.firstName,
            LastName: userPayload.lastName,
            Phone: userPayload.phone,
            Role: userPayload.role,
            LastTZ: userPayload.lastTZ,
            LastLogin: userPayload.lastLogin,
        });
    }

    async getUserData(email: string, shouldFetchPassword: boolean = false): Promise<User> {
        const user = await this.userModel
            .findOne({ Email: email })
            .select({ ...(shouldFetchPassword ? {} : { Password: 0 }) })
            .exec();

        if (!user) {
            logger.info(`User with email ${email} not found`);
            throw new NotFoundError('User not found');
        }

        return user.toObject();
    }

    async deleteUserData(email: string): Promise<DeleteUserResponse> {
        const user = await this.userModel
            .deleteOne({ Email: email })
            .exec();
  
        if (!user) {
            logger.info(`User with email ${email} not found`);
            return {success:false, message:"User not found"};
            //throw new NotFoundError('User not found');
        }

        return {success:true, message:"User Deleted Successfully"};
    }
    async  generateResetToken(email: string) {
        const token = crypto.randomBytes(20).toString('hex');
        const user = await this.userModel.findOneAndUpdate(
          { Email: email },
          {
            resetPasswordToken: token,
            resetPasswordExpires: Date.now() + 3600000, // 1 hour
          },
          { new: true }
        );
      
        if (!user) {
          throw new Error('No account with that email address exists.');
        }
      
        return token;
      }
    async  sendResetEmail(email: string, token: string) {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
              user: process.env.MAIL_USER,
              pass: process.env.MAIL_PASSWORD,
            },
          });
      
        const mailOptions = {
          to: email,
          from: 'homeopathicHA@outlook.com',
          subject: 'Password Reset',
          text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n
                 Please click on the following link, or paste this into your browser to complete the process:\n\n
                 ${process.env.APP_URL}reset?token=${token}\n\n
                 If you did not request this, please ignore this email and your password will remain unchanged.\n`,
        };
      
        await transporter.sendMail(mailOptions);
      }
    async forgotPassword(email: string): Promise<DeleteUserResponse> {
        const token = await this.generateResetToken(email);
        await this.sendResetEmail(email, token);
      
        return {success:true, message:token};
    }
    async  resetPasswordMethod(token: string, newPassword: string) {
        const user = await this.userModel.findOne({
          resetPasswordToken: token,
          resetPasswordExpires: { $gt: Date.now() },
        });
      
        if (!user) {
          throw new Error('Password reset token is invalid or has expired.');
        }
      
        user.Password = hashSync(newPassword, 8) ;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;
      
        await user.save();
      }
    async resetPassword(token: string,password: string): Promise<DeleteUserResponse> {
        await this.resetPasswordMethod(token, password);
      
        return {success:true, message:`Your password has been successfully updated.`};
    }

    async updateUserData(email: string, payload: UserEditRequest): Promise<User> {
        const updatedUser = await this.userModel
            .findOneAndUpdate(
                {
                    Email: email,
                },
                {
                    ...(payload.firstName ? { FirstName: payload.firstName } : {}),
                    ...(payload.lastName ? { LastName: payload.lastName } : {}),
                    ...(payload.age ? { Age: payload.age } : {}),
                    ...(payload.phone ? { Phone: payload.phone } : {}),
                    ...(payload.password ? { Password: hashSync(payload.password, 8) } : {}),
                },
                {
                    new: true,
                }
            )
            .select({ Password: 0 })
            .exec();

        if (!updatedUser) {
            logger.info(`User with email ${email} not found`);
            throw new NotFoundError('User not found');
        }

        return updatedUser.toObject();
    }

    async updateUserLoginTime(email: string): Promise<void> {
        await this.userModel.findOneAndUpdate(
            {
                Email: email,
            },
            {
                LastLogin: new Date(),
            }
        );
    }
}
