import { IContactMessagesController, IContactMessagesService } from '../../../types/contactMessageTypes';
import { NextFunction, Response } from 'express';
import { RequestWithUser } from '../../../types';

export class ContactMessageController implements IContactMessagesController {
    constructor(private contactMessageService: IContactMessagesService) {}

    public createContactMessage = async (req: RequestWithUser, res: Response, next: NextFunction) => {
        try {
            await this.contactMessageService.createContactMessage({ ...req.body, userIdentifier: req.user?.Email });
            res.status(200).json({ message: 'Message Sent successfully' });
        } catch (error) {
            next(error);
        }
    };

    public getUserMessages = async (_: RequestWithUser, res: Response, next: NextFunction) => {
        try {
            const contactMessages = await this.contactMessageService.getUserMessages();
            res.status(200).json(contactMessages);
        } catch (error) {
            next(error);
        }
    };
}
