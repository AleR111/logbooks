import { AboutPage } from 'pages/About';
import { MainPage } from 'pages/Main';
import { NotFoundPage } from 'pages/NotFoudPage';
import { ProfilePage } from 'pages/ProfilePage';
import { RouteProps } from 'react-router-dom';

export enum AppRouters {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRouters, string> = {
    [AppRouters.MAIN]: '/',
    [AppRouters.ABOUT]: '/about',
    [AppRouters.PROFILE]: '/profile',
    [AppRouters.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRouters, RouteProps> = {
    [AppRouters.MAIN]: {
        path: RoutePath[AppRouters.MAIN],
        element: <MainPage />,
    },
    [AppRouters.ABOUT]: {
        path: RoutePath[AppRouters.ABOUT],
        element: <AboutPage />,
    },
    [AppRouters.PROFILE]: {
        path: RoutePath[AppRouters.PROFILE],
        element: <ProfilePage />,
    },
    [AppRouters.NOT_FOUND]: {
        path: RoutePath[AppRouters.NOT_FOUND],
        element: <NotFoundPage />,
    },
};
