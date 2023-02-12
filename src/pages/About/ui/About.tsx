import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const About: FC = () => {
    const { t } = useTranslation('about');
    return <div>{t('About')}</div>;
};

export default About;
