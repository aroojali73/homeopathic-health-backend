import { RequestWithUser } from './expressTypes';
import { NextFunction, Response } from 'express';
import { ContactMessage } from '../repositories/contactMessage';
import { ContactMessageCreateRequest } from '../api/v1/contactMessage/requests';

export type IContactMessagesController = {
    createContactMessage: (req: RequestWithUser, res: Response, next: NextFunction) => void;
    getUserMessages: (req: RequestWithUser, res: Response, next: NextFunction) => void;
};

export type IContactMessagesService = {
    createContactMessage: (payload: ICreateMessageService) => Promise<void>;
    getUserMessages: () => Promise<ContactMessage[]>;
};

export type IContactMessagesRepo = {
    createContactMessage: (payload: ICreateMessageRepo) => Promise<void>;
    getUserMessages: () => Promise<ContactMessage[]>;
};

/**
 * Function parameter types
 */
export type ICreateMessageService = ContactMessageCreateRequest & {
    userIdentifier: string;
};

export type ICreateMessageRepo = ICreateMessageService & {
    messageDate: Date;
    id: string;
};
