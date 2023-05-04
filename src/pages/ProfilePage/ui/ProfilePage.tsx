import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import { VStack } from 'shared/ui/Stack/VStack/VStack';
import { EditableProfileCard } from 'features/EditableProfileCard';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage: FC<ProfilePageProps> = (props) => {
    const { className } = props;

    const { id } = useParams<{id: string}>();

    return (
        <Page className={classNames('', [className])}>
            <EditableProfileCard id={id} />
        </Page>
    );
};

export default ProfilePage;
