import { profileReducer } from 'entities/Profile';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
// import cls from './ProfilePage.module.scss';

const reducers: ReducersList = { profile: profileReducer };

interface ProfilePageProps {
    className?: string;
}

const ProfilePage: FC<ProfilePageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <DynamicModuleLoader reducers={reducers} remoteAfterUnmount>
            <div className={classNames('cls.profilePage', [className])}>
                {t('profile page')}
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
