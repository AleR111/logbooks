import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { Profile } from '@/entities/Profile';
import { validateProfileData } from './validateProfileData';
import { ValidateProfileError } from '../../types/editableProfileCardSchema';

const data: Profile = {
    username: 'test',
    age: 23,
    country: Country.USA,
    city: 'LA',
    currency: Currency.USD,
    first: 'test',
    lastname: 'test',
};

describe('validateProfileData.test', () => {
    test('should return empty array of errors', () => {
        expect(validateProfileData(data)).toEqual([]);
    });

    test('should return no data', () => {
        expect(validateProfileData()).toEqual([
            ValidateProfileError.NO_DATA,
        ]);
    });

    test('should return Incorrect user data', () => {
        const profile: Profile = {
            ...data,
            first: '',
            lastname: '',
        };

        expect(validateProfileData(profile)).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });

    test('should return Incorrect user data', () => {
        const profile: Profile = {
            ...data,
            age: undefined,
        };

        expect(validateProfileData(profile)).toEqual([
            ValidateProfileError.INCORRECT_AGE,
        ]);
    });
});
