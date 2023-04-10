import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';

const About: FC = () => {
    const { t } = useTranslation('about');
    return <Page>{t('About')}</Page>;
};

export default About;
