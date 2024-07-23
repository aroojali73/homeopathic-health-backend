import { IDiagnosisRepo, IDiagnosisService } from '../../types/diagnosisTypes';
import {
    DiagnosisConditionsCreateRequest,
    DiagnosisCreateRequest,
    DiagnosisEditRequest,
} from '../../api/v1/conditionDiagnosis/requests';
import { ConditionDiagnosis } from '../../repositories';
import { AppError } from '../../types';
import { ActivityLogTypes, EventBus } from '../../utils/eventBus';

export class ConditionDiagnosisService implements IDiagnosisService {
    constructor(
        private diagnosisRepo: IDiagnosisRepo,
        private eventBus: EventBus
    ) {}

    async createDiagnosisConditionData(
        userEmail: string,
        diagnosisPayload: DiagnosisConditionsCreateRequest
    ): Promise<ConditionDiagnosis> {
        const newDiagnosisCondition = await this.diagnosisRepo.createDiagnosisConditionData({
            ...diagnosisPayload,
        });

        this.eventBus.emitEvent(ActivityLogTypes.CONDITION_DIAGNOSIS_ADDED, {
            userEmail: userEmail,
            logType: ActivityLogTypes.CONDITION_DIAGNOSIS_ADDED,
            logDate: new Date(),
            logAttribute: {
                entityIdentifier: newDiagnosisCondition.Condition,
                entityData: diagnosisPayload,
            },
        });

        return newDiagnosisCondition;
    }

    async createDiagnosisData(
        userEmail: string,
        diagnosisPayload: DiagnosisCreateRequest
    ): Promise<ConditionDiagnosis> {
        if (!this.areKeyForDiagnosisUnique(diagnosisPayload.diagnosis)) {
            throw new AppError('Diagnosis Keys are not unique', 400);
        }

        const newDiagnosis = await this.diagnosisRepo.createDiagnosisData({
            ...diagnosisPayload,
        });

        this.eventBus.emitEvent(ActivityLogTypes.CONDITION_ADDED, {
            userEmail: userEmail,
            logType: ActivityLogTypes.CONDITION_ADDED,
            logDate: new Date(),
            logAttribute: {
                entityIdentifier: newDiagnosis.Condition,
                entityData: diagnosisPayload,
            },
        });

        return newDiagnosis;
    }

    async updateDiagnosisData(userEmail: string, payload: DiagnosisEditRequest): Promise<ConditionDiagnosis> {
        if (!this.areKeyForDiagnosisUnique(payload.diagnosis)) {
            throw new AppError('Diagnosis Keys are not unique', 400);
        }

        const updatedDiagnosis = await this.diagnosisRepo.updateDiagnosisData(payload);

        this.eventBus.emitEvent(ActivityLogTypes.CONDITION_UPDATED, {
            userEmail: userEmail,
            logType: ActivityLogTypes.CONDITION_UPDATED,
            logDate: new Date(),
            logAttribute: {
                entityIdentifier: updatedDiagnosis.Condition,
                entityData: payload,
            },
        });

        return updatedDiagnosis;
    }

    async getDiagnosisData(userEmail: string, condition: string): Promise<ConditionDiagnosis> {
        const diagnosis = await this.diagnosisRepo.getDiagnosisData(condition);
        const enrichedDiagnosis = this.enrichDiagnosisWithDosageData(diagnosis);

        this.eventBus.emitEvent(ActivityLogTypes.USER_CONDITION_SEARCH, {
            userEmail: userEmail,
            logType: ActivityLogTypes.USER_CONDITION_SEARCH,
            logDate: new Date(),
            logAttribute: {
                entityIdentifier: enrichedDiagnosis.Condition,
                entityData: enrichedDiagnosis,
            },
        });

        return enrichedDiagnosis;
    }

    async deleteDiagnosisData(userEmail: string, condition: string): Promise<void> {
        await this.diagnosisRepo.deleteDiagnosisData(condition);

        this.eventBus.emitEvent(ActivityLogTypes.CONDITION_DELETED, {
            userEmail: userEmail,
            logType: ActivityLogTypes.CONDITION_DELETED,
            logDate: new Date(),
            logAttribute: {
                entityIdentifier: condition,
                entityData: {},
            },
        });
    }

    async deleteDiagnosisConditionData(userEmail: string, condition: string, key: number): Promise<void> {
        await this.diagnosisRepo.deleteDiagnosisConditionData(condition, key);

        this.eventBus.emitEvent(ActivityLogTypes.CONDITION_DIAGNOSIS_DELETED, {
            userEmail: userEmail,
            logType: ActivityLogTypes.CONDITION_DIAGNOSIS_DELETED,
            logDate: new Date(),
            logAttribute: {
                entityIdentifier: `${condition}-${key}`,
                entityData: {},
            },
        });
    }

    private areKeyForDiagnosisUnique(payload): boolean {
        const unique = payload.filter((obj, index) => payload.findIndex((item) => item.key === obj.key) === index);

        return payload.length === unique.length;
    }

    private enrichDiagnosisWithDosageData(data: ConditionDiagnosis): ConditionDiagnosis {
        const enrichmentMap = {
            '30': '3 to 5 times a day',
            '200': 'Once or Twice a week',
            Cx1: '11 Drops in small amount of water',
            Cx2: '3 to 5 times a day - Diluted in water for external use',
            Cx3: '5 drops in warm water 5-6 times daily',
            Cx4: '11 drops daily',
            '6x': 'Use after consulting a qualified homeopath to avoid any reaction.',
            '1M': 'Use after consulting a qualified homeopath to avoid any reaction.',
        };
        const diagnosis = data.Diagnosis.map((diag) => {
            return {
                ...diag,
                Dosage: enrichmentMap[diag.Dosage],
            };
        });

        return {
            ...data,
            Diagnosis: diagnosis,
        };
    }
}
