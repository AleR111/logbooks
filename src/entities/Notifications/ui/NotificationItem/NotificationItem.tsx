import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card, CartTheme } from '@/shared/ui/Card';
import { Text } from '@/shared/ui/Text';
import cls from './NotificationItem.module.scss';
import { Notification } from '../../model/types/notification';

interface NotificationItemProps {
    className?: string;
    item: Notification;
}

export const NotificationItem: React.FC<NotificationItemProps> = memo(
    (props) => {
        const { className, item } = props;

        const content = (
            <Card
                theme={CartTheme.OUTLINED}
                className={classNames(cls.notificationItem, [className])}
            >
                <Text title={item.title} text={item.description} />
            </Card>
        );

        if (item.href) {
            return (
                <a
                    className={cls.link}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                >
                    {content}
                </a>
            );
        }

        return (
            <Card
                theme={CartTheme.OUTLINED}
                className={classNames(cls.notificationItem, [className])}
            >
                <Text title={item.title} text={item.description} />
            </Card>
        );
    },
);
