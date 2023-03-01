import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginState } from '../../model/selectors/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';

interface LoginFormProps {
    className?: string;
}

export const LoginForm: FC<LoginFormProps> = memo((props) => {
    const { className } = props;
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const {
        username, password, isLoading, error,
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );
    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );
    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    return (
        <div className={classNames(cls.loginForm, [className])}>
            <Text title={t('Auth form')} />
            {error && <Text text={error} theme={TextTheme.ERROR} />}
            <Input
                type="text"
                className={cls.input}
                placeholder={t('username')}
                autoFocus
                value={username}
                onChange={onChangeUsername}
            />
            <Input
                type="text"
                className={cls.input}
                placeholder={t('password')}
                value={password}
                onChange={onChangePassword}
            />
            <Button
                theme={ButtonTheme.OUTLINE}
                className={cls.loginBtn}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Sign In')}
            </Button>
        </div>
    );
});
