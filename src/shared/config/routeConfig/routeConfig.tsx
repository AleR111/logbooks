import { AboutPage } from 'pages/About';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';
import { ArticleEditPage } from 'pages/ArticleEditPage';
import { ArticlesPage } from 'pages/ArticlesPage';
import { MainPage } from 'pages/Main';
import { NotFoundPage } from 'pages/NotFoudPage';
import { ProfilePage } from 'pages/ProfilePage';
import { RouteProps } from 'react-router-dom';

export type AppRouterProps = RouteProps & {
    authOnly?: boolean;
};

export enum AppRouters {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_CREATE = 'article_create',
    ARTICLE_EDIT = 'article_edit',
    ARTICLE_DETAILS = 'article_details',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRouters, string> = {
    [AppRouters.MAIN]: '/',
    [AppRouters.ABOUT]: '/about',
    [AppRouters.PROFILE]: '/profile',
    [AppRouters.ARTICLES]: '/articles',
    [AppRouters.ARTICLE_DETAILS]: '/articles',
    [AppRouters.ARTICLE_CREATE]: '/articles/new',
    [AppRouters.ARTICLE_EDIT]: '/articles/:id/edit',
    [AppRouters.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRouters, AppRouterProps> = {
    [AppRouters.MAIN]: {
        path: RoutePath[AppRouters.MAIN],
        element: <MainPage />,
    },
    [AppRouters.ABOUT]: {
        path: RoutePath[AppRouters.ABOUT],
        element: <AboutPage />,
    },
    [AppRouters.PROFILE]: {
        path: `${RoutePath[AppRouters.PROFILE]}/:id`,
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRouters.ARTICLES]: {
        path: RoutePath[AppRouters.ARTICLES],
        element: <ArticlesPage />,
        authOnly: true,

    },
    [AppRouters.ARTICLE_DETAILS]: {
        path: `${RoutePath[AppRouters.ARTICLE_DETAILS]}/:id`,
        element: <ArticleDetailsPage />,
        authOnly: true,

    },
    [AppRouters.ARTICLE_CREATE]: {
        path: `${RoutePath[AppRouters.ARTICLE_CREATE]}`,
        element: <ArticleEditPage />,
        authOnly: true,

    },
    [AppRouters.ARTICLE_EDIT]: {
        path: `${RoutePath[AppRouters.ARTICLE_EDIT]}`,
        element: <ArticleEditPage />,
        authOnly: true,

    },
    [AppRouters.NOT_FOUND]: {
        path: RoutePath[AppRouters.NOT_FOUND],
        element: <NotFoundPage />,
    },
};
