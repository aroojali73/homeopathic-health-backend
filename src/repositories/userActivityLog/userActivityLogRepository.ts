import { IAddUserActivityLogRepo, IUserActivityLogRepo } from '../../types/userActivityLogTypes';
import { UserActivityLog, UserActivityLogModel } from './userActivityLogModel';
import { ActivityLogTypes } from '../../utils/eventBus';

export class UserActivityLogRepository implements IUserActivityLogRepo {
    constructor(private logModel: typeof UserActivityLogModel) {}

    async addUserActivityLog(payload: IAddUserActivityLogRepo): Promise<void> {
        await this.logModel.create({
            Id: payload.id,
            SchemaVersion: 1,
            UserEmail: payload.userEmail,
            LogDate: payload.logDate,
            ActivityLogType: payload.logType,
            ActivityLogAttributes: {
                EntityIdentifier: payload.logAttribute.entityIdentifier,
                EntityData: payload.logAttribute.entityData,
            },
        });
    }

    async getUserActivityLogs(userEmail: string): Promise<UserActivityLog[]> {
        return this.logModel
            .find({ UserEmail: userEmail, ActivityLogType: ActivityLogTypes.USER_CONDITION_SEARCH })
            .exec();
    }
}
