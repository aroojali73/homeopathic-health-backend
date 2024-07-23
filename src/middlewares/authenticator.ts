import { NextFunction, Response } from 'express';
import { verify } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { ForbiddenError, RequestWithUser, UnauthorizedError } from '../types';
import { UserModel } from '../repositories';

dotenv.config();

export const authenticator = function (roles: string[]) {
    return async function (req: RequestWithUser, _: Response, next: NextFunction) {
        try {
            if (!(req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer')) {
                throw new UnauthorizedError('Invalid Request');
            }

            const decodedToken = verify(req.headers.authorization.split(' ')[1], process.env.API_SECRET || '') as {
                email: string;
            };
            const userEmail = decodedToken.email;

            if (!userEmail) {
                throw new UnauthorizedError('Invalid Request');
            }

            const user = await UserModel.findOne({ Email: userEmail }).exec();

            if (!user) {
                throw new UnauthorizedError('Invalid Request');
            }

            if (!roles.includes(user.Role)) {
                throw new ForbiddenError('Permission Denied');
            }

            req.user = user.toObject();
            next();
        } catch (error) {
            if (['TokenExpiredError', 'JsonWebTokenError', 'NotBeforeError'].includes(error.name)) {
                next(new UnauthorizedError(error.message));
            }
            next(error);
        }
    };
};
