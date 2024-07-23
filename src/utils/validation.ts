import { Schema, ZodObject } from 'zod';
import { Request, Response, NextFunction } from 'express';
import { ValidationError } from '../types';

export const validateRequestPathParams =
    <T>(validateSchema: Schema<T> | ZodObject<never>) =>
    (req: Request, _: Response, next: NextFunction) => {
        const result = validateSchema.safeParse(req.params);
        if (!result.success) {
            const errors = result.error.errors;

            next(new ValidationError('Path parameters contain invalid values', errors));
        }

        next();
    };

export const validateRequestHeaders =
    <T>(validateSchema: Schema<T> | ZodObject<never>) =>
    (req: Request, _: Response, next: NextFunction) => {
        const result = validateSchema.safeParse(req.headers);
        if (!result.success) {
            const errors = result.error.errors;

            next(new ValidationError('Request headers structure validation failed', errors));
            return;
        }
        next();
    };

export const validateRequestBody =
    <T>(validateSchema: Schema<T> | ZodObject<never>) =>
    (req: Request, _: Response, next: NextFunction) => {
        const result = validateSchema.safeParse(req.body);
        if (!result.success) {
            const errors = result.error.errors;

            next(new ValidationError('Request data structure validation failed', errors));
            return;
        }
        next();
    };

export const validateRequestQueryParams =
    <T>(validateSchema: Schema<T> | ZodObject<never>) =>
    (req: Request, _: Response, next: NextFunction) => {
        const result = validateSchema.safeParse(req.query);
        if (!result.success) {
            const errors = result.error.errors;

            next(new ValidationError('Query parameters contain invalid values', errors));
            return;
        }

        next();
    };
