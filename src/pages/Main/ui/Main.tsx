import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';

const Main: FC = () => {
    const { t } = useTranslation();
    return (
        <Page>
            {t('Main')}
        </Page>
    );
};

export default Main;
