import express, { Router } from 'express';
import { UserController } from './userController';
import { userEditRequestSchema, userSigninSchema, userSignupRequestSchema } from './requests';
import { UserModel, UserRepository, UserRole } from '../../../repositories';
import { UserService } from '../../../services';
import { validateRequestBody, validateRequestPathParams } from '../../../utils';
import { authenticator } from '../../../middlewares/authenticator';
import { SingletonEventBus } from '../../../utils/eventBus';

export const UserRoutes = (): Router => {
    const router = express.Router();

    const eventBus = SingletonEventBus.getInstance();

    const userRepo = new UserRepository(UserModel);
    const userService = new UserService(userRepo, eventBus);
    const userController = new UserController(userService);

    router.post(`/signup`, validateRequestBody(userSignupRequestSchema), userController.signUp);
    router.post(`/signin`, validateRequestBody(userSigninSchema), userController.signIn);
    router.post(`/signout`, authenticator([UserRole.ADMIN, UserRole.END_USER]), userController.signOut);
    router.post('/forgot',userController.forgotPassword);
    router.post('/reset/:token', userController.resetPassword);    
    router.get(
        `/`,
        authenticator([UserRole.ADMIN, UserRole.END_USER]),
        // validateRequestPathParams(userDetailsRequestSchema),
        userController.userDetails
    );
    router.delete(
        `/`,
        authenticator([UserRole.ADMIN, UserRole.END_USER]),
        // validateRequestPathParams(userDetailsRequestSchema),
        userController.deleteUser
    );    
    router.put(
        `/:email`,
        authenticator([UserRole.ADMIN, UserRole.END_USER]),
        validateRequestPathParams(userEditRequestSchema),
        userController.updateUserDetails
    );

    return router;
};
