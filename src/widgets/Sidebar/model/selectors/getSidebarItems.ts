import { createSelector } from '@reduxjs/toolkit';
import { getAuthUserData } from '@/entities/User';
import MainIcon from '@/shared/assets/icons/main.svg';
import AboutIcon from '@/shared/assets/icons/about.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import ArticleIcon from '@/shared/assets/icons/article.svg';
import { SidebarItemType } from '../types/selectors';
import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
} from '@/shared/const/router';

export const getSidebarItems = createSelector(getAuthUserData, (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: getRouteMain(),
            text: 'Main',
            Icon: MainIcon,
        },
        {
            path: getRouteAbout(),
            text: 'About',
            Icon: AboutIcon,
        },
    ];

    if (userData) {
        sidebarItemsList.push(
            {
                path: getRouteProfile(userData.id),
                text: 'Profile',
                Icon: ProfileIcon,
                authOnly: true,
            },
            {
                path: getRouteArticles(),
                text: 'Articles',
                Icon: ArticleIcon,
                authOnly: true,
            },
        );
    }

    return sidebarItemsList;
});
