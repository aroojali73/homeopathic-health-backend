import { Request, Response, NextFunction } from 'express';
import { RequestWithUser,RequestWithUserEmail,RequestWithUserReset } from './expressTypes';
import { User, UserRole } from '../repositories';
import { UserEditRequest, UserSigninRequest, UserSignupRequest } from '../api/v1/user/requests';

export type IUserService = {
    getUserDetails: (email: string, shouldFetchPassword: boolean) => Promise<User>;
    deleteUser: (email: string) => Promise<DeleteUserResponse>;
    forgotPassword: (email: string) => Promise<DeleteUserResponse>;
    resetPassword: (token: string,password: string) => Promise<DeleteUserResponse>;
    updateUserDetails: (email: string, payload: UserEditRequest) => Promise<User>;
    userSignUp: (userPayload: IUserSignupService) => Promise<void>;
    userSignin: (userSigninPayload: UserSigninRequest) => Promise<IUserSigninDTO>;
    userSignout: (userSignoutPayload?: User) => Promise<void>;
};

export type IUserController = {
    userDetails: (req: RequestWithUser, res: Response, next: NextFunction) => void;
    updateUserDetails: (req: RequestWithUser, res: Response, next: NextFunction) => void;
    forgotPassword: (email: RequestWithUserEmail, res: Response, next: NextFunction) => void;
    resetPassword: (token: RequestWithUserReset, res: Response, next: NextFunction) => void;
    signUp: (req: Request, res: Response, next: NextFunction) => void;
    signIn: (req: Request, res: Response, next: NextFunction) => void;
    signOut: (req: Request, res: Response, next: NextFunction) => void;
};

export type IUserRepo = {
    getUserData: (email: string, shouldFetchPassword: boolean) => Promise<User>;
    deleteUserData: (email: string) => Promise<DeleteUserResponse>;
    forgotPassword: (email: string) => Promise<DeleteUserResponse>;
    resetPassword: (token: string,password: string) => Promise<DeleteUserResponse>;
    updateUserData: (email: string, payload: UserEditRequest) => Promise<User>;
    updateUserLoginTime: (email: string) => Promise<void>;
    userSignUp: (userPayload: IUserSignupRepo) => Promise<void>;
};
/**
 * Function parameter types
 */
export type IUserSignupService = UserSignupRequest & { IPAddress: string };
export type IUserSignupRepo = UserSignupRequest & {
    lastTZ: string;
    role: UserRole.END_USER;
    lastLogin: Date;
    IPAddress: string;
};

/**
 * DTO types
 */
export type IUserSigninDTO = {
    email: string;
    firstName: string;
    lastName: string;
    role: string;
    accessToken: string;
};

export type DeleteUserResponse = {
    success: boolean;
    message: string;
  }
