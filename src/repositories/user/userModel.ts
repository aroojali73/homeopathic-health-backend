import { getModelForClass, index, modelOptions, prop, Severity } from '@typegoose/typegoose';

export enum UserRole {
    ADMIN = 'admin',
    END_USER = 'endUser',
}

@index({ Email: 1 }, { unique: true })
@index({ FirstName: 1, LastName: 1 })
@modelOptions({
    options: {
        allowMixed: Severity.ALLOW,
    },
})
export class User {
    @prop({ required: true })
    public FirstName: string;

    @prop({ required: true })
    public LastName: string;

    @prop({
        required: true,
        unique: true,
        index: true,
        lowercase: true,
        trim: true,
        validate: {
            validator: function (v: string) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: '{VALUE} is not a valid email!',
        },
    })
    public Email: string;

    @prop({ required: true })
    public Password: string;

    @prop()
    public Phone: string;

    @prop({ required: true })
    public LastTZ: string;

    @prop({ required: true, enum: [UserRole.ADMIN, UserRole.END_USER] })
    public Role: UserRole;

    @prop()
    public Age: number;

    @prop()
    public LastLogin: Date;

    @prop()
    public IPAddress: string;

    @prop({ required: true })
    public SchemaVersion: number;

    @prop()
    public resetPasswordToken?: string;

    @prop()
    public resetPasswordExpires?: Date;
}

export const UserModel = getModelForClass(User, {
    schemaOptions: {
        collection: 'users',
        strict: true,
    },
});
