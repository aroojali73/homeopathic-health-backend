import { runMigration as seedDiagnosis } from './0001_seedDiagnosis';
import { runMigration as seedUsers } from './0002_seedUsers';

async function runSeeds() {
    await seedDiagnosis();
    await seedUsers();
}

void runSeeds();
