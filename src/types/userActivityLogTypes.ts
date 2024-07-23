import { UserActivityLog } from '../repositories/userActivityLog';
import { ActivityLogTypes, EventData } from '../utils/eventBus';
import { RequestWithUser } from './expressTypes';
import { NextFunction, Response } from 'express';

export type IUserActivityLogController = {
    getUserActivityLogs: (req: RequestWithUser, res: Response, next: NextFunction) => void;
};

export type IUserActivityLogService = {
    getUserActivityLogs: (userEmail: string) => Promise<UserActivityLog[]>;
    addUserActivityLog: (payload: EventData) => Promise<void>;
};

export type IUserActivityLogRepo = {
    addUserActivityLog: (payload: IAddUserActivityLogRepo) => Promise<void>;
    getUserActivityLogs: (userEmail: string) => Promise<UserActivityLog[]>;
};

/**
 * Function parameter types
 */
export type IAddUserActivityLogRepo = {
    id: string;
    userEmail: string;
    logType: ActivityLogTypes;
    logAttribute: {
        entityIdentifier: string;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        entityData: Record<string, any>;
    };
    logDate: Date;
};
