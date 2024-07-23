import express, { Router } from 'express';
import OpenAi from 'openai';
import dotenv from 'dotenv';
import { ChatService } from '../../../services/chat/chatService';
import { ChatController } from './chatController';
import { authenticator } from '../../../middlewares/authenticator';
import { UserRole } from '../../../repositories';
import { validateRequestBody } from '../../../utils';
import { ChatCreate } from './requests';

dotenv.config();

export const ChatRoutes = (): Router => {
    const router = express.Router();

    const openai = new OpenAi({
        apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
    });

    const chatService = new ChatService(openai);
    const chatController = new ChatController(chatService);

    router.post(
        `/`,
        authenticator([UserRole.ADMIN, UserRole.END_USER]),
        validateRequestBody(ChatCreate),
        chatController.createChat
    );

    return router;
};
