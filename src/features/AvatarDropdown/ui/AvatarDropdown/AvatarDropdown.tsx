import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Dropdown } from '@/shared/ui/Popups';
import { Avatar } from '@/shared/ui/Avatar';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    getAuthUserData,
    isUserAdmin,
    isUserManager,
    userActions,
} from '@/entities/User';
import { RoutePath } from '@/shared/const/router';

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown: React.FC<AvatarDropdownProps> = memo((props) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const authData = useSelector(getAuthUserData);
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (!authData) {
        return null;
    }

    const isAdminPanelAvailable = isAdmin || isManager;

    return (
        <Dropdown
            className={classNames('', [className])}
            trigger={<Avatar size={30} src={authData.avatar} />}
            items={[
                ...(isAdminPanelAvailable
                    ? [
                        {
                            content: t('Admin Panel'),
                            href: RoutePath.admin_panel,
                        },
                    ]
                    : []),
                {
                    content: t('Profile'),
                    href: `${RoutePath.profile}/${authData.id}`,
                },
                { content: t('Log out'), onClick: onLogout },
            ]}
            direction="bottom left"
        />
    );
});
