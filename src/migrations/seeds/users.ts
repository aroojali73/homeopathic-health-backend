import dotenv from 'dotenv';
import { hashSync } from 'bcrypt';
import { User, UserRole } from '../../repositories';

dotenv.config();

export const UsersData: User[] = [
    {
        FirstName: 'Asad',
        LastName: 'Ullah',
        Email: 'asad.u@outlook.com',
        LastTZ: Intl.DateTimeFormat().resolvedOptions().timeZone || '',
        Age: 28,
        LastLogin: new Date(),
        IPAddress: '',
        Phone: '',
        Role: UserRole.ADMIN,
        Password: hashSync(process.env.ADMIN_USER_PW || 'admin', 8),
        SchemaVersion: 1,
    },
    {
        FirstName: 'John',
        LastName: 'Smith',
        Email: 'j.smith@yopmail.com',
        LastTZ: Intl.DateTimeFormat().resolvedOptions().timeZone || '',
        Age: 25,
        LastLogin: new Date(),
        IPAddress: '',
        Phone: '',
        Role: UserRole.END_USER,
        Password: hashSync(process.env.END_USER_PW || 'user', 8),
        SchemaVersion: 1,
    },
];
