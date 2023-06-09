import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const About: FC = () => {
    const { t } = useTranslation('about');
    return <Page data-testid="AboutPage">{t('About')}</Page>;
};

export default About;
