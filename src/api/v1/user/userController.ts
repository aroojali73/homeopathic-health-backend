import { ForbiddenError, IUserController, IUserService, RequestWithUser, RequestWithUserEmail,RequestWithUserReset } from '../../../types';
import { NextFunction, Request, Response } from 'express';
// import { UserRole } from '../../../repositories';

export class UserController implements IUserController {
    constructor(private userService: IUserService) {}

    public signUp = async (req: Request, res: Response, next: NextFunction) => {
        try {
            await this.userService.userSignUp({ ...req.body, IPAddress: req.ip });
            res.status(200).json({ message: 'User registered successfully' });
        } catch (error) {
            next(error);
        }
    };

    public signIn = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const payload = await this.userService.userSignin(req.body);
            res.status(200).json({ ...payload, message: 'User signed in successfully' });
        } catch (error) {
            next(error);
        }
    };

    public signOut = async (req: RequestWithUser, res: Response, next: NextFunction) => {
        try {
            await this.userService.userSignout(req.user);
            res.status(200).json({ message: 'User signed out successfully' });
        } catch (error) {
            next(error);
        }
    };

    public userDetails = async (req: RequestWithUser, res: Response, next: NextFunction) => {
        try {
            // if (req.user?.Role !== UserRole.ADMIN && req.user?.Email !== req.params.email) {
            //     throw new ForbiddenError('Permission Denied');
            // }
            const userDetails = await this.userService.getUserDetails(req.user?.Email as string, false);
            res.status(200).json(userDetails);
        } catch (error) {
            next(error);
        }
    };

    public deleteUser = async (req: RequestWithUser, res: Response, next: NextFunction) => {
        try {
            const userDetails = await this.userService.deleteUser(req.user?.Email as string);
            res.status(200).json(userDetails);
        } catch (error) {
            next(error);
        }
    };    

    public updateUserDetails = async (req: RequestWithUser, res: Response, next: NextFunction) => {
        try {
            if (req.user?.Email !== req.params.email) {
                throw new ForbiddenError('Permission Denied');
            }
            const updatedUser = await this.userService.updateUserDetails(req.params.email, req.body);
            res.status(200).json(updatedUser);
        } catch (error) {
            next(error);
        }
    };

    public forgotPassword  = async (req: RequestWithUserEmail, res: Response, next: NextFunction) => {
        try {
            const forgotData = await this.userService.forgotPassword(req?.body.email as string);
            res.status(200).json(forgotData);
        } catch (error) {
            next(error);
        }
      }
    public resetPassword  = async (req: RequestWithUserReset, res: Response, next: NextFunction) => {
        try {
            const forgotData = await this.userService.resetPassword(req.params.token as string, req.body.password as string);
            res.status(200).json(forgotData);
        } catch (error) {
            next(error);
        }
      }
}
