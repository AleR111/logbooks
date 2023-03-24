import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

export enum ValidateProfileError {
    INCORRECT_USER_DATA = 'Incorrect user data',
    INCORRECT_AGE = 'Incorrect age',
    INCORRECT_COUNTRY = 'Incorrect country',
    NO_DATA = 'no data',
    SERVER_ERROR = 'server error',
}

export interface Profile {
    first?: string;
    lastname?: string;
    age?: number;
    currency?: Currency;
    country?: Country;
    city?: string;
    username?: string;
    avatar?: string;
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateErrors?: ValidateProfileError[];
}
