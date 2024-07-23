import { IContactMessagesRepo, IContactMessagesService, ICreateMessageService } from '../../types/contactMessageTypes';
import { v4 as uuidv4 } from 'uuid';
import { ContactMessage } from '../../repositories/contactMessage';

export class ContactMessagesService implements IContactMessagesService {
    constructor(private contactMessageRepo: IContactMessagesRepo) {}

    async createContactMessage(payload: ICreateMessageService): Promise<void> {
        await this.contactMessageRepo.createContactMessage({
            ...payload,
            id: uuidv4(),
            messageDate: new Date(),
        });
    }

    async getUserMessages(): Promise<ContactMessage[]> {
        return this.contactMessageRepo.getUserMessages();
    }
}
