import { IContactMessagesRepo, ICreateMessageRepo } from '../../types/contactMessageTypes';
import { ContactMessage, ContactMessageModel } from './contactMessageModel';

export class ContactMessageRepoitory implements IContactMessagesRepo {
    constructor(private contactMessageModel: typeof ContactMessageModel) {}

    async createContactMessage(payload: ICreateMessageRepo): Promise<void> {
        await this.contactMessageModel.create({
            Id: payload.id,
            UserIdentifier: payload.userIdentifier,
            UserEmail: payload.email,
            UserPhone: payload.phone,
            MessageDate: payload.messageDate,
            Message: payload.message,
            FirstName: payload.firstName,
            LastName: payload.lastName,
            SchemaVersion: 1,
        });
    }

    async getUserMessages(): Promise<ContactMessage[]> {
        return this.contactMessageModel.find();
    }
}
