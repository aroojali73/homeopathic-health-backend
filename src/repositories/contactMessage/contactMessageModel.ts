import { getModelForClass, index, prop } from '@typegoose/typegoose';

@index({ Id: 1 }, { unique: true })
@index({ UserEmail: 1 })
@index({ userIdentifier: 1 })
export class ContactMessage {
    @prop({ required: true, unique: true })
    public Id: string;

    @prop({ required: true })
    public UserEmail: string;

    @prop({ required: true })
    public UserPhone: string;

    @prop({ required: true })
    public FirstName: string;

    @prop({ required: true })
    public LastName: string;

    @prop({ required: true })
    public UserIdentifier: string;

    @prop({ required: true })
    public Message: string;

    @prop({ required: true })
    public MessageDate: Date;

    @prop({ required: true })
    public SchemaVersion: number;
}

export const ContactMessageModel = getModelForClass(ContactMessage, {
    schemaOptions: {
        collection: 'contact_messages',
        strict: true,
    },
});
