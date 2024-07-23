import { FilterQuery } from 'mongoose';
import { ConditionDiagnosis, ConditionDiagnosisModel } from './conditionDiagnosisModel';
import { ICreateDiagnosisRepo, IDiagnosisRepo } from '../../types/diagnosisTypes';
import { DiagnosisConditionsCreateRequest, DiagnosisEditRequest } from '../../api/v1/conditionDiagnosis/requests';
import { AppError, NotFoundError } from '../../types';
import { AppLogger, extractRelativeFilePath } from '../../utils';

const logger = AppLogger.getLogger(extractRelativeFilePath(__filename));

export class ConditionDiagnosisRepository implements IDiagnosisRepo {
    constructor(private diagnosisModel: typeof ConditionDiagnosisModel) {}

    async createDiagnosisData(diagnosisPayload: ICreateDiagnosisRepo): Promise<ConditionDiagnosis> {
        const createdDiagnosisData = await this.diagnosisModel.create({
            SchemaVersion: 1,
            Condition: diagnosisPayload.condition,
            Diagnosis: diagnosisPayload.diagnosis.map((diag) => ({
                Key: diag.key,
                Question: diag.question,
                Medication: diag.medication,
                Dosage: diag.dosage,
            })),
        });

        const diagnosisData = createdDiagnosisData.toObject();

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        delete diagnosisData._id;

        return diagnosisData;
    }

    async createDiagnosisConditionData(
        diagnosisPayload: DiagnosisConditionsCreateRequest
    ): Promise<ConditionDiagnosis> {
        const alreadyExist = await this.diagnosisModel
            .findOne({ Condition: diagnosisPayload.condition, 'Diagnosis.Key': diagnosisPayload.diagnosis.key })
            .exec();

        if (alreadyExist) {
            throw new AppError(`Diagnosis Condition already exist with key ${diagnosisPayload.diagnosis.key}`, 400);
        }

        const updatedDiagnosis = await this.diagnosisModel.findOneAndUpdate(
            {
                Condition: diagnosisPayload.condition,
            },
            {
                $push: {
                    Diagnosis: {
                        Key: diagnosisPayload.diagnosis.key,
                        Question: diagnosisPayload.diagnosis.question,
                        Medication: diagnosisPayload.diagnosis.medication,
                        Dosage: diagnosisPayload.diagnosis.dosage,
                    },
                },
            },
            {
                new: true,
            }
        );

        if (!updatedDiagnosis) {
            throw new NotFoundError(`Condition Diagnosis ${diagnosisPayload.condition} not found`);
        }

        return updatedDiagnosis.toObject();
    }

    async updateDiagnosisData(payload: DiagnosisEditRequest): Promise<ConditionDiagnosis> {
        await Promise.all(
            payload.diagnosis.map((diag) => {
                const filterQuery: FilterQuery<typeof ConditionDiagnosisModel> = {
                    Condition: payload.condition,
                    'Diagnosis.Key': diag.key,
                };

                if (diag.question || diag.dosage || diag.medication) {
                    const update = {
                        $set: {
                            ...(diag.question ? { 'Diagnosis.$[element].Question': diag.question } : {}),
                            ...(diag.medication ? { 'Diagnosis.$[element].Medication': diag.medication } : {}),
                            ...(diag.dosage ? { 'Diagnosis.$[element].Dosage': diag.dosage } : {}),
                        },
                    };

                    const options = {
                        arrayFilters: [{ 'element.Key': diag.key }],
                    };

                    return this.diagnosisModel.findOneAndUpdate(filterQuery, update, options);
                }
            })
        );

        return this.getDiagnosisData(payload.condition);
    }

    async getDiagnosisData(condition: string): Promise<ConditionDiagnosis> {
        const diagnosis = await this.diagnosisModel.findOne({ Condition: condition }).exec();
        if (!diagnosis) {
            logger.info(`Condition Diagnosis ${condition} not found`);
            throw new NotFoundError(`Condition Diagnosis ${condition} not found`);
        }

        return diagnosis.toObject();
    }

    async deleteDiagnosisData(condition: string): Promise<void> {
        await this.diagnosisModel
            .deleteOne({
                Condition: condition,
            })
            .exec();
    }

    async deleteDiagnosisConditionData(condition: string, key: number): Promise<void> {
        await this.diagnosisModel
            .findOneAndUpdate(
                {
                    Condition: condition,
                },
                {
                    $pull: {
                        Diagnosis: {
                            Key: key,
                        },
                    },
                }
            )
            .exec();
    }
}
