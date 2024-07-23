import * as z from 'zod';

export const diagnosisCreateRequestSchema = z.object({
    condition: z.string().min(2, { message: 'Diagnosis Condition field has to be filled.' }),
    diagnosis: z.array(
        z.object({
            key: z.number().min(0, { message: 'Diagnosis Condition Key field has to be filled.' }),
            question: z.string().min(3, { message: 'question should be multi words.' }),
            medication: z.array(z.string().min(2, { message: 'Medication should be full name' })),
            dosage: z.string().min(2, { message: 'Dosage should be full name' }),
        })
    ),
});

export const diagnosisConditionsCreateRequestSchema = z.object({
    condition: z.string().min(2, { message: 'Diagnosis Condition field has to be filled.' }),
    diagnosis: z.object({
        key: z.number().min(0, { message: 'Diagnosis Condition Key field has to be filled.' }),
        question: z.string().min(3, { message: 'question should be multi words.' }).optional(),
        medication: z.array(z.string().min(2, { message: 'Medication should be full name' })).optional(),
        dosage: z.string().min(2, { message: 'Dosage should be full name' }).optional(),
    }),
});

export const diagnosisEditRequestSchema = z.object({
    condition: z.string().min(2, { message: 'Diagnosis Condition field has to be filled.' }),
    diagnosis: z.array(
        z.object({
            key: z.number().min(0, { message: 'Diagnosis Condition Key field has to be filled.' }),
            question: z.string().min(3, { message: 'question should be multi words.' }).optional(),
            medication: z.array(z.string().min(2, { message: 'Medication should be full name' })).optional(),
            dosage: z.string().min(2, { message: 'Dosage should be full name' }).optional(),
        })
    ),
});

export const diagnosisDetailsRequestSchema = z.object({
    condition: z.string().min(2, { message: 'Condition field has to be filled.' }),
});

export const diagnosisDeleteRequestSchema = z.object({
    condition: z.string().min(2, { message: 'Condition field has to be filled.' }),
});

export const diagnosisConditionsDeleteRequestSchema = z.object({
    condition: z.string().min(2, { message: 'Condition field has to be filled.' }),
    key: z.string().min(0, { message: 'Diagnosis Condition Key field has to be filled.' }),
});

export type DiagnosisCreateRequest = z.infer<typeof diagnosisCreateRequestSchema>;
export type DiagnosisConditionsCreateRequest = z.infer<typeof diagnosisConditionsCreateRequestSchema>;
export type DiagnosisEditRequest = z.infer<typeof diagnosisEditRequestSchema>;
export type DiagnosisDetailsRequest = z.infer<typeof diagnosisDetailsRequestSchema>;
export type DiagnosisDeleteRequest = z.infer<typeof diagnosisDeleteRequestSchema>;
export type DiagnosisConditionsDeleteRequest = z.infer<typeof diagnosisConditionsDeleteRequestSchema>;
