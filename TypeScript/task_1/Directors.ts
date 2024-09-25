import { Teacher } from './Teacher';

// Interface Directors qui étend Teacher
export interface Directors extends Teacher {
    numberOfReports: number;
}
