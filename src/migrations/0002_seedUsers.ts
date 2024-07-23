import { MongooseBulkWritePerWriteOptions } from 'mongoose';
import { AnyBulkWriteOperation } from 'mongodb';
import { mongoose } from '@typegoose/typegoose';
import dotenv from 'dotenv';
import { UsersData } from './seeds/users';
import { User, UserModel } from '../repositories';

dotenv.config();

export async function runMigration() {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/', {
        auth: {
            username: process.env.MONGO_USER,
            password: process.env.MONGO_USER_PW,
        },
        dbName: process.env.MONGO_DB_NAME,
    });

    const diagnosis: (AnyBulkWriteOperation<User> & MongooseBulkWritePerWriteOptions)[] = [];
    for (const i in UsersData) {
        diagnosis.push({
            updateOne: {
                filter: { Email: UsersData[i].Email },
                update: UsersData[i],
                upsert: true,
            },
        });
    }

    await UserModel.bulkWrite(diagnosis);

    await mongoose.disconnect();
}
