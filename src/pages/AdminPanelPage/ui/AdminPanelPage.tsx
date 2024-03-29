import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const AdminPanelPage: FC = () => {
    const { t } = useTranslation();
    return <Page data-testid="AdminPanelPage">{t('AdminPanelPage')}</Page>;
};

export default AdminPanelPage;
