import { NextFunction, Response } from 'express';
import {
    AppError,
    BadRequestError,
    ForbiddenError,
    NotFoundError,
    RequestWithRequestID,
    UnauthorizedError,
    ValidationError,
} from '../types';
import { AppLogger, extractRelativeFilePath } from '../utils';

const logger = AppLogger.getLogger(extractRelativeFilePath(__filename));
export const errorHandler = function () {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return (err: Error, req: RequestWithRequestID, res: Response, _: NextFunction) => {
        if (process.env.NODE_ENV !== 'test') {
            logger.error(`Error in request id ${req.requestID}:`, {
                errorName: err.name,
                errStack: err.stack,
                errMessage: err.message,
                url: req.url,
            });
        }

        /**
         * If required, do message scrubbing before returning
         * other type of business errors and custom errors should be handled here.
         */

        if (err instanceof NotFoundError) {
            res.status(err.status).json({ message: `Not Found: ${err.message}` });
        } else if (err instanceof AppError) {
            res.status(err.status).json({ message: `Application Error: ${err.message}` });
        } else if (err instanceof BadRequestError) {
            res.status(err.status).json({ message: `Bad Request: ${err.message}` });
        } else if (err instanceof ForbiddenError) {
            res.status(err.status).json({ message: `Forbidden: ${err.message}` });
        } else if (err instanceof UnauthorizedError) {
            res.status(err.status).json({ message: `Unauthorized: ${err.message}` });
        } else if (err instanceof ValidationError) {
            res.status(err.status).json({ message: `Validation Failed: ${err.message}`, error: err.validationErrors });
        } else {
            res.status(500).json({ message: `Internal Server Error: ${err.message}` });
        }
    };
};
