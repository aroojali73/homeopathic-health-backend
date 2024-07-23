import express, { Router } from 'express';
import { ContactMessageModel, ContactMessageRepoitory } from '../../../repositories/contactMessage';
import { ContactMessagesService } from '../../../services/contactMessages';
import { ContactMessageController } from './contactMessageController';
import { validateRequestBody } from '../../../utils';
import { contactMessageCreate } from './requests';
import { authenticator } from '../../../middlewares/authenticator';
import { UserRole } from '../../../repositories';

export const ContactMessageRoutes = (): Router => {
    const router = express.Router();

    const contactMessageRepo = new ContactMessageRepoitory(ContactMessageModel);
    const contactMessageService = new ContactMessagesService(contactMessageRepo);
    const contactMessageController = new ContactMessageController(contactMessageService);

    router.post(
        `/`,
        authenticator([UserRole.ADMIN, UserRole.END_USER]),
        validateRequestBody(contactMessageCreate),
        contactMessageController.createContactMessage
    );
    router.get(`/`, authenticator([UserRole.ADMIN]), contactMessageController.getUserMessages);

    return router;
};
