import { getModelForClass, index, modelOptions, prop, Severity } from '@typegoose/typegoose';

export class NestedDiagnosis {
    @prop({ required: true })
    Key: number;

    @prop({ required: true })
    Question: string;

    @prop({ required: true })
    Medication: string[];

    @prop({ required: true })
    Dosage: string;
}

@index({ Id: 1 })
@index({ Condition: 1 })
@index({ Condition: 1 }, { unique: true })
@index({ Id: 1, Condition: 1 })
@modelOptions({
    options: {
        allowMixed: Severity.ALLOW,
    },
})
export class ConditionDiagnosis {
    @prop({ required: true, unique: true, index: true })
    public Condition: string;

    @prop({ required: true, type: () => [NestedDiagnosis] })
    public Diagnosis: NestedDiagnosis[];

    @prop({ required: true })
    public SchemaVersion: number;
}

export const ConditionDiagnosisModel = getModelForClass(ConditionDiagnosis, {
    schemaOptions: {
        collection: 'condition_diagnosis',
        strict: true,
    },
});
