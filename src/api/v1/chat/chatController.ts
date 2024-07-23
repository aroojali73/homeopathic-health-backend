import { NextFunction, Response } from 'express';

import { IChatController, IChatService } from '../../../types/chatTypes';
import { RequestWithUser } from '../../../types';

export class ChatController implements IChatController {
    constructor(private chatService: IChatService) {}

    public createChat = async (req: RequestWithUser, res: Response, next: NextFunction) => {
        try {
            const response = await this.chatService.createChat(req.body, req.user?.Email || '');
            res.status(200).json({ message: response });
        } catch (error) {
            next(error);
        }
    };
}
