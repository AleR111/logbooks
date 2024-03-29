import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Skeleton } from '@/shared/ui/Skeleton';
import { useNotifications } from '../../api/notificationApi';
import cls from './NotificationList.module.scss';
import { NotificationItem } from '../NotificationItem/NotificationItem';

interface NotificationListProps {
    className?: string;
}

export const NotificationList: React.FC<NotificationListProps> = memo(
    (props) => {
        const { className } = props;

        const { data: notifications, isLoading } = useNotifications(null, {
            pollingInterval: 10000,
        });

        if (isLoading) {
            return (
                <VStack
                    gap="16"
                    max
                    className={classNames(cls.notificationList, [className])}
                >
                    <Skeleton width="100%" border="8px" height="80px" />
                    <Skeleton width="100%" border="8px" height="80px" />
                    <Skeleton width="100%" border="8px" height="80px" />
                </VStack>
            );
        }

        return (
            <VStack
                gap="16"
                max
                className={classNames(cls.notificationList, [className])}
            >
                {notifications?.map((item) => (
                    <NotificationItem key={item.id} item={item} />
                ))}
            </VStack>
        );
    },
);
