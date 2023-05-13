import { Article } from '@/entities/Article';
import { rtqApi } from '@/shared/api/rtqApi';
import { Notification } from '../model/types/notification';

const notificationApi = rtqApi.injectEndpoints({
    endpoints: (build) => ({
        getNotifications: build.query<Notification[], null>({
            query: () => ({
                url: '/notifications',
            }),
        }),
    }),
});

export const useNotifications = notificationApi.useGetNotificationsQuery;
