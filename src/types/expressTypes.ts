import { Request } from 'express';
import { User } from '../repositories';

export type RequestWithRequestID = {
    requestID?: string;
} & Request;

export type RequestWithUser = {
    user?: User;
} & Request;

export type RequestWithUserEmail = {
    email?: string;
} & Request;

export type RequestWithUserReset = {
    body: {
        password: string;
      };
      params: {
        token: string;
      };
} & Request;
