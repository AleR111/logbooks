import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { StarRating } from '@/shared/ui/StarRating';

const Main: FC = () => {
    const { t } = useTranslation();
    return (
        <Page>
            {t('Main')}
        </Page>
    );
};

export default Main;
