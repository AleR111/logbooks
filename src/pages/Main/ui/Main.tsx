import { Counter } from 'entities/Counter';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const Main: FC = () => {
    const { t } = useTranslation();
    return (
        <div>
            {t('Main')}
            <Counter />
        </div>
    );
};

export default Main;
