import express, { Router } from 'express';
import { ConditionDiagnosisModel, ConditionDiagnosisRepository, UserRole } from '../../../repositories';
import { ConditionDiagnosisService } from '../../../services';
import { ConditionDiagnosisController } from './conditionDiagnosisController';
import { validateRequestBody, validateRequestPathParams } from '../../../utils';
import { authenticator } from '../../../middlewares/authenticator';
import {
    diagnosisConditionsCreateRequestSchema,
    diagnosisConditionsDeleteRequestSchema,
    diagnosisCreateRequestSchema,
    diagnosisDeleteRequestSchema,
    diagnosisDetailsRequestSchema,
    diagnosisEditRequestSchema,
} from './requests';
import { SingletonEventBus } from '../../../utils/eventBus';

export const ConditionDiagnosisRoutes = (): Router => {
    const router = express.Router();

    const eventBus = SingletonEventBus.getInstance();

    const diagnosisRepo = new ConditionDiagnosisRepository(ConditionDiagnosisModel);
    const diagnosisService = new ConditionDiagnosisService(diagnosisRepo, eventBus);
    const diagnosisController = new ConditionDiagnosisController(diagnosisService);

    router.get(
        '/:condition',
        authenticator([UserRole.ADMIN, UserRole.END_USER]),
        validateRequestPathParams(diagnosisDetailsRequestSchema),
        diagnosisController.diagnosisDetails
    );

    router.delete(
        '/:condition',
        authenticator([UserRole.ADMIN]),
        validateRequestPathParams(diagnosisDeleteRequestSchema),
        diagnosisController.deleteDiagnosis
    );

    router.delete(
        '/:condition/diagnosis/:key',
        authenticator([UserRole.ADMIN]),
        validateRequestPathParams(diagnosisConditionsDeleteRequestSchema),
        diagnosisController.deleteDiagnosisConditionData
    );

    router.post(
        '/',
        authenticator([UserRole.ADMIN]),
        validateRequestBody(diagnosisCreateRequestSchema),
        diagnosisController.createDiagnosis
    );

    router.post(
        '/:condition/diagnosis',
        authenticator([UserRole.ADMIN]),
        validateRequestBody(diagnosisConditionsCreateRequestSchema),
        diagnosisController.createDiagnosisConditionData
    );

    router.put(
        '/',
        authenticator([UserRole.ADMIN]),
        validateRequestBody(diagnosisEditRequestSchema),
        diagnosisController.updateDiagnosis
    );

    return router;
};
