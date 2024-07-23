import { getModelForClass, index, modelOptions, prop, Severity } from '@typegoose/typegoose';

@index({ Id: 1 }, { unique: true })
@index({ UserEmail: 1 })
@index({ ActivityLogType: 1 })
@index({ UserEmail: 1, ActivityLogType: 1 })
@modelOptions({
    options: {
        allowMixed: Severity.ALLOW,
    },
})
export class UserActivityLog {
    @prop({ required: true, unique: true })
    public Id: string;

    @prop({ required: true })
    public UserEmail: string;

    @prop({ required: true })
    public ActivityLogType: string;

    @prop({ required: true })
    public ActivityLogAttributes: {
        EntityIdentifier: string;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        EntityData: Record<string, any>;
    };

    @prop({ required: true })
    public LogDate: Date;

    @prop({ required: true })
    public SchemaVersion: number;
}

export const UserActivityLogModel = getModelForClass(UserActivityLog, {
    schemaOptions: {
        collection: 'user_activity_logs',
        strict: true,
    },
});
