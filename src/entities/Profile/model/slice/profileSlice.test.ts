import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema } from '../types/profile';
import { profileReducer, profileActions } from './profileSlice';

const data = {
    username: 'test',
    age: 23,
    country: Country.USA,
    city: 'LA',
    currency: Currency.USD,
    first: 'test',
    lastname: 'test',
};

describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.setReadonly(true),
            ),
        ).toEqual({
            readonly: true,
        });
    });

    test('test cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: data,
            readonly: false,
            validateErrors: [],
        };
        expect(
            profileReducer(state as ProfileSchema, profileActions.cancelEdit()),
        ).toEqual({
            form: undefined,
            readonly: true,
            validateErrors: undefined,
        });
    });

    test('test update profile', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: { username: 'qwe' },
        };
        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.updateProfile({ username: 'asd' }),
            ),
        ).toEqual({ form: { username: 'asd' } });
    });

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {};

        expect(
            profileReducer(state as ProfileSchema, updateProfileData.pending),
        ).toEqual({
            validateErrors: undefined,
            isLoading: true,
        });
    });

    test('test update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
            readonly: false,
        };

        expect(
            profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, '')),
        ).toEqual({
            isLoading: false,
            readonly: true,
            form: data,
            data,
        });
    });
});
