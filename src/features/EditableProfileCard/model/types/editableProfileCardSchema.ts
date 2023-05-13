import { Profile } from '@/entities/Profile';

export enum ValidateProfileError {
    INCORRECT_USER_DATA = 'Incorrect user data',
    INCORRECT_AGE = 'Incorrect age',
    INCORRECT_COUNTRY = 'Incorrect country',
    NO_DATA = 'no data',
    SERVER_ERROR = 'server error',
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateErrors?: ValidateProfileError[];
}
