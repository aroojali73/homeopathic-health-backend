import { ConditionDiagnosis } from '../repositories';
import {
    DiagnosisConditionsCreateRequest,
    DiagnosisCreateRequest,
    DiagnosisEditRequest,
} from '../api/v1/conditionDiagnosis/requests';
import { RequestWithUser } from './expressTypes';
import { NextFunction, Response } from 'express';

export type IDiagnosisService = {
    getDiagnosisData: (userEmail: string, condition: string) => Promise<ConditionDiagnosis>;
    updateDiagnosisData: (userEmail: string, payload: DiagnosisEditRequest) => Promise<ConditionDiagnosis>;
    createDiagnosisData: (userEmail: string, diagnosisPayload: DiagnosisCreateRequest) => Promise<ConditionDiagnosis>;
    createDiagnosisConditionData: (
        userEmail: string,
        diagnosisPayload: DiagnosisConditionsCreateRequest
    ) => Promise<ConditionDiagnosis>;
    deleteDiagnosisData: (userEmail: string, condition: string) => Promise<void>;
    deleteDiagnosisConditionData: (userEmail: string, condition: string, key: number) => Promise<void>;
};

export type IDiagnosisController = {
    diagnosisDetails: (req: RequestWithUser, res: Response, next: NextFunction) => void;
    updateDiagnosis: (req: RequestWithUser, res: Response, next: NextFunction) => void;
    createDiagnosis: (req: RequestWithUser, res: Response, next: NextFunction) => void;
    createDiagnosisConditionData: (req: RequestWithUser, res: Response, next: NextFunction) => void;
    deleteDiagnosis: (req: RequestWithUser, res: Response, next: NextFunction) => void;
    deleteDiagnosisConditionData: (req: RequestWithUser, res: Response, next: NextFunction) => Promise<void>;
};

export type IDiagnosisRepo = {
    getDiagnosisData: (condition: string) => Promise<ConditionDiagnosis>;
    updateDiagnosisData: (payload: DiagnosisEditRequest) => Promise<ConditionDiagnosis>;
    createDiagnosisData: (diagnosisPayload: ICreateDiagnosisRepo) => Promise<ConditionDiagnosis>;
    createDiagnosisConditionData: (diagnosisPayload: DiagnosisConditionsCreateRequest) => Promise<ConditionDiagnosis>;
    deleteDiagnosisData: (condition: string) => Promise<void>;
    deleteDiagnosisConditionData: (condition: string, key: number) => Promise<void>;
};

/**
 * Function parameter types
 */
export type ICreateDiagnosisRepo = DiagnosisCreateRequest;
