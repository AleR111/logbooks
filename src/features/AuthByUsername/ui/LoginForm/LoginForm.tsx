import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm: FC<LoginFormProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.loginForm, [className])}>
            <Input
                type="text"
                className={cls.input}
                placeholder={t('username')}
                autoFocus
            />
            <Input
                type="text"
                className={cls.input}
                placeholder={t('password')}
            />
            <Button className={cls.loginBtn}>{t('Sign In')}</Button>
        </div>
    );
};
