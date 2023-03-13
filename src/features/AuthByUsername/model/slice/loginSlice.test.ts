import { loginByUsername } from '../services/loginByUsername/loginByUsername';
import { LoginSchema } from '../types/loginSchema';
import { loginReducer, loginActions } from './loginSlice';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = {
            username: 'user',
        };
        expect(
            loginReducer(state as LoginSchema, loginActions.setUsername('123')),
        ).toEqual({ username: '123' });
    });
    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = {
            password: '123',
        };
        expect(
            loginReducer(state as LoginSchema, loginActions.setPassword('12345')),
        ).toEqual({ password: '12345' });
    });
    test('test set loading', () => {
        const state: DeepPartial<LoginSchema> = {
            isLoading: false,
        };
        expect(
            loginReducer(state as LoginSchema, loginByUsername.pending),
        ).toEqual({ isLoading: true });
    });
});
