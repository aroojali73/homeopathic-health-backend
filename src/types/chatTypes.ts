import { RequestWithUser } from './expressTypes';
import { NextFunction, Response } from 'express';
import { chatCreateRequest } from '../api/v1/chat/requests';

export type IChatController = {
    createChat: (req: RequestWithUser, res: Response, next: NextFunction) => void;
};

export type IChatService = {
    createChat: (payload: chatCreateRequest, userIdentifier: string) => Promise<string>;
};

/**
 * Function parameter types
 */
