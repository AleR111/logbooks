import { AboutPage } from 'pages/About';
import { MainPage } from 'pages/Main';
import { NotFoundPage } from 'pages/NotFoudPage';
import { RouteProps } from 'react-router-dom';

export enum AppRouters {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRouters, string> = {
    [AppRouters.MAIN]: '/',
    [AppRouters.ABOUT]: '/about',
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
    [AppRouters.NOT_FOUND]: {
        path: RoutePath[AppRouters.NOT_FOUND],
        element: <NotFoundPage />,
    },
};
