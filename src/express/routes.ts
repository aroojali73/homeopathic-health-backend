import { Express } from 'express';
import { ConditionDiagnosisRoutes, HealthCheckRoutes, UserActivityLogRoutes, UserRoutes } from '../api/v1';
import { RouteConstants, RoutePrefix } from './routeConstants';
import { ContactMessageRoutes } from '../api/v1/contactMessage/contactMessageRoutes';
import { ChatRoutes } from '../api/v1/chat/chatRoutes';

/**
 *
 * @param app Express
 */

export const setupRoutes = (app: Express) => {
    const healthCheck = HealthCheckRoutes();
    const user = UserRoutes();
    const conditionDiagnosis = ConditionDiagnosisRoutes();
    const userActivityLog = UserActivityLogRoutes();
    const contactMessages = ContactMessageRoutes();
    const chatRoutes = ChatRoutes();

    app.use(`${RoutePrefix}/${RouteConstants.HEALTH_CHECK}`, healthCheck);
    app.use(`${RoutePrefix}/${RouteConstants.USER}`, user);
    app.use(`${RoutePrefix}/${RouteConstants.CONDITION}`, conditionDiagnosis);
    app.use(`${RoutePrefix}/${RouteConstants.USER_ACTIVITY_LOG}`, userActivityLog);
    app.use(`${RoutePrefix}/${RouteConstants.CONTACT_MESSAGE}`, contactMessages);
    app.use(`${RoutePrefix}/${RouteConstants.CHAT}`, chatRoutes);
};
