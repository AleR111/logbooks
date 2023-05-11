import { classNames } from 'shared/lib/classNames/classNames';
import { Popover } from 'shared/ui/Popups';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { NotificationList } from 'entities/Notifications';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/notification.svg';
import { memo } from 'react';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton: React.FC<NotificationButtonProps> = memo(
    (props) => {
        const { className } = props;

        return (
            <Popover
                className={classNames(cls.notificationButton, [className])}
                trigger={(
                    <Button theme={ButtonTheme.CLEAR}>
                        <Icon Svg={NotificationIcon} inverted />
                    </Button>
                )}
                direction="bottom left"
            >
                <NotificationList className={cls.notifications} />
            </Popover>
        );
    },
);
