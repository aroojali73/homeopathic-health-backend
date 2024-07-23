import { MongooseBulkWritePerWriteOptions } from 'mongoose';
import { AnyBulkWriteOperation } from 'mongodb';
import { mongoose } from '@typegoose/typegoose';
import dotenv from 'dotenv';
import { ConditionDiagnosis, ConditionDiagnosisModel } from '../repositories';
import { DiagnosisData } from './seeds/diagnosis';

dotenv.config();

export async function runMigration() {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/', {
        auth: {
            username: process.env.MONGO_USER,
            password: process.env.MONGO_USER_PW,
        },
        dbName: process.env.MONGO_DB_NAME,
    });

    const diagnosis: (AnyBulkWriteOperation<ConditionDiagnosis> & MongooseBulkWritePerWriteOptions)[] = [];
    for (const i in DiagnosisData) {
        diagnosis.push({
            updateOne: {
                filter: { Condition: DiagnosisData[i].Condition },
                update: DiagnosisData[i],
                upsert: true,
            },
        });
    }

    await ConditionDiagnosisModel.bulkWrite(diagnosis);

    await mongoose.disconnect();
}
