import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';
import { StarRating } from '@/shared/ui/StarRating/StarRating';

const Main: FC = () => {
    const { t } = useTranslation();
    return (
        <Page>
            {t('Main')}
        </Page>
    );
};

export default Main;
