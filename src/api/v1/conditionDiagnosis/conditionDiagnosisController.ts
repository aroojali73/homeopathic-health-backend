import { IDiagnosisController, IDiagnosisService } from '../../../types/diagnosisTypes';
import { RequestWithUser } from '../../../types';
import { NextFunction, Response } from 'express';

export class ConditionDiagnosisController implements IDiagnosisController {
    constructor(private diagnosisService: IDiagnosisService) {}

    public diagnosisDetails = async (req: RequestWithUser, res: Response, next: NextFunction) => {
        try {
            const details = await this.diagnosisService.getDiagnosisData(
                req.user?.Email as string,
                req.params.condition
            );
            res.status(200).json(details);
        } catch (error) {
            next(error);
        }
    };

    public deleteDiagnosis = async (req: RequestWithUser, res: Response, next: NextFunction) => {
        try {
            await this.diagnosisService.deleteDiagnosisData(req.user?.Email as string, req.params.condition);
            res.status(200).json({ message: 'condition deleted' });
        } catch (error) {
            next(error);
        }
    };

    public deleteDiagnosisConditionData = async (req: RequestWithUser, res: Response, next: NextFunction) => {
        try {
            await this.diagnosisService.deleteDiagnosisConditionData(
                req.user?.Email as string,
                req.params.condition,
                Number(req.params.key)
            );
            res.status(200).json({ message: 'condition diagnosis deleted' });
        } catch (error) {
            next(error);
        }
    };

    public createDiagnosis = async (req: RequestWithUser, res: Response, next: NextFunction) => {
        try {
            const diagnosis = await this.diagnosisService.createDiagnosisData(req.user?.Email as string, req.body);
            res.status(200).json(diagnosis);
        } catch (error) {
            next(error);
        }
    };

    public createDiagnosisConditionData = async (req: RequestWithUser, res: Response, next: NextFunction) => {
        try {
            const diagnosis = await this.diagnosisService.createDiagnosisConditionData(
                req.user?.Email as string,
                req.body
            );
            res.status(200).json(diagnosis);
        } catch (error) {
            next(error);
        }
    };

    public updateDiagnosis = async (req: RequestWithUser, res: Response, next: NextFunction) => {
        try {
            const updatedDiagnosis = await this.diagnosisService.updateDiagnosisData(
                req.user?.Email as string,
                req.body
            );
            res.status(200).json(updatedDiagnosis);
        } catch (error) {
            next(error);
        }
    };
}
