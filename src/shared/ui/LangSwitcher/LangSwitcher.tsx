import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '../Button/Button';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher: FC<LangSwitcherProps> = memo((props) => {
    const { className, short } = props;

    const { t, i18n } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'sp' : 'en');
    };

    return (
        <Button
            className={classNames('', [className])}
            theme={ButtonTheme.CLEAR}
            onClick={toggle}
        >
            {short ? t('Short Language') : t('Language')}
        </Button>
    );
});
