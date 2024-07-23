import { v4 as uuidv4 } from 'uuid';
import { IUserActivityLogRepo, IUserActivityLogService } from '../../types/userActivityLogTypes';
import { EventData } from '../../utils/eventBus';
import { UserActivityLog } from '../../repositories/userActivityLog';

export class UserActivityLogService implements IUserActivityLogService {
    constructor(private logRepo: IUserActivityLogRepo) {}

    async addUserActivityLog(payload: EventData): Promise<void> {
        await this.logRepo.addUserActivityLog({
            ...payload,
            id: uuidv4(),
        });
    }

    async getUserActivityLogs(userEmail: string): Promise<UserActivityLog[]> {
        return this.logRepo.getUserActivityLogs(userEmail);
    }
}
