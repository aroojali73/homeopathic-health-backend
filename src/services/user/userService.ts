import { compareSync } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { IUserRepo, IUserService, IUserSigninDTO, DeleteUserResponse, IUserSignupService, UnauthorizedError } from '../../types';
import { User, UserRole } from '../../repositories';
import { UserEditRequest, UserSigninRequest } from '../../api/v1/user/requests';
import dotenv from 'dotenv';
import { ActivityLogTypes, EventBus } from '../../utils/eventBus';

dotenv.config();

export class UserService implements IUserService {
    constructor(
        private userRepository: IUserRepo,
        private eventBus: EventBus
    ) {}

    async userSignUp(userPayload: IUserSignupService): Promise<void> {
        await this.userRepository.userSignUp({
            ...userPayload,
            role: UserRole.END_USER,
            lastLogin: new Date(),
        });
    }

    async userSignin(userSigninPayload: UserSigninRequest): Promise<IUserSigninDTO> {
        const userDetails = await this.getUserDetails(userSigninPayload.email, true);

        const isPasswordValid = compareSync(userSigninPayload.password, userDetails.Password);
        if (!isPasswordValid) {
            throw new UnauthorizedError('Invalid password');
        }

        await this.userRepository.updateUserLoginTime(userSigninPayload.email);
        const token = sign({ email: userDetails.Email }, process.env.API_SECRET || '', { expiresIn: 1800 });

        this.eventBus.emitEvent(ActivityLogTypes.USER_SIGN_IN, {
            userEmail: userSigninPayload.email,
            logType: ActivityLogTypes.USER_SIGN_IN,
            logDate: new Date(),
            logAttribute: {
                entityIdentifier: userDetails.Email,
                entityData: {
                    email: userDetails.Email,
                    firstName: userDetails.FirstName,
                    lastName: userDetails.LastName,
                },
            },
        });

        return {
            email: userDetails.Email,
            firstName: userDetails.FirstName,
            lastName: userDetails.LastName,
            role: userDetails.Role,
            accessToken: token,
        };
    }

    async userSignout(userSignoutPayload?: User): Promise<void> {
        // clear the token from session if maintained.

        this.eventBus.emitEvent(ActivityLogTypes.USER_SIGN_OUT, {
            userEmail: userSignoutPayload?.Email as string,
            logType: ActivityLogTypes.USER_SIGN_OUT,
            logDate: new Date(),
            logAttribute: {
                entityIdentifier: userSignoutPayload?.Email as string,
                entityData: {
                    email: userSignoutPayload?.Email,
                    firstName: userSignoutPayload?.FirstName,
                    lastName: userSignoutPayload?.LastName,
                },
            },
        });
    }

    async getUserDetails(email: string, shouldFetchPassword: boolean = false): Promise<User> {
        return this.userRepository.getUserData(email, shouldFetchPassword);
    }

    async deleteUser(email: string): Promise<DeleteUserResponse> {
        return this.userRepository.deleteUserData(email);
    }
    async forgotPassword(email: string): Promise<DeleteUserResponse> {
        return this.userRepository.forgotPassword(email);
    }
    async resetPassword(token: string,password: string): Promise<DeleteUserResponse> {
        return this.userRepository.resetPassword(token,password);
    }

    async updateUserDetails(email: string, payload: UserEditRequest): Promise<User> {
        this.eventBus.emitEvent(ActivityLogTypes.USER_UPDATED, {
            userEmail: email,
            logType: ActivityLogTypes.USER_UPDATED,
            logDate: new Date(),
            logAttribute: {
                entityIdentifier: email,
                entityData: {
                    ...(payload.firstName ? { firstName: payload.firstName } : {}),
                    ...(payload.lastName ? { lastName: payload.lastName } : {}),
                    ...(payload.phone ? { phone: payload.phone } : {}),
                    ...(payload.age ? { age: payload.age } : {}),
                    // we should not log the password
                    isPasswordUpdated: !!payload.password,
                },
            },
        });

        return this.userRepository.updateUserData(email, payload);
    }
}
