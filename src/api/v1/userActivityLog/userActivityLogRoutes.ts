import express, { Router } from 'express';
import { UserActivityLogModel, UserActivityLogRepository } from '../../../repositories/userActivityLog';
import { UserActivityLogService } from '../../../services';
import { UserActivityLogController } from './userActivityLogController';
// import { validateRequestPathParams } from '../../../utils';
// import { userDetailsRequestSchema } from '../user/requests';
import { authenticator } from '../../../middlewares/authenticator';
import { UserRole } from '../../../repositories';
import { ActivityLogTypes, EventBus, EventData, SingletonEventBus } from '../../../utils/eventBus';

export const UserActivityLogRoutes = (): Router => {
    const router = express.Router();

    const eventBus = SingletonEventBus.getInstance();

    const userActivityLogRepo = new UserActivityLogRepository(UserActivityLogModel);
    const userActivityLogService = new UserActivityLogService(userActivityLogRepo);
    const userActivityLogController = new UserActivityLogController(userActivityLogService);

    setupEventHandlers(eventBus, userActivityLogService);

    router.get(`/`, authenticator([UserRole.ADMIN, UserRole.END_USER]), userActivityLogController.getUserActivityLogs);

    return router;
};

const setupEventHandlers = (eventBus: EventBus, userActivityLogService: UserActivityLogService) => {
    const createActivityLog = async (eventData: EventData) => {
        await userActivityLogService.addUserActivityLog(eventData);
    };

    eventBus.onEvent(ActivityLogTypes.USER_SIGN_IN, createActivityLog);
    eventBus.onEvent(ActivityLogTypes.USER_SIGN_OUT, createActivityLog);
    eventBus.onEvent(ActivityLogTypes.USER_UPDATED, createActivityLog);
    eventBus.onEvent(ActivityLogTypes.CONDITION_DIAGNOSIS_DELETED, createActivityLog);
    eventBus.onEvent(ActivityLogTypes.CONDITION_DIAGNOSIS_ADDED, createActivityLog);
    eventBus.onEvent(ActivityLogTypes.CONDITION_ADDED, createActivityLog);
    eventBus.onEvent(ActivityLogTypes.CONDITION_DELETED, createActivityLog);
    eventBus.onEvent(ActivityLogTypes.CONDITION_UPDATED, createActivityLog);
    eventBus.onEvent(ActivityLogTypes.USER_CONDITION_SEARCH, createActivityLog);
};
