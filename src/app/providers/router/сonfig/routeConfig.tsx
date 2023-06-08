import { UserRole } from '@/entities/User';
import { AboutPage } from '@/pages/About';
import { AdminPanelPage } from '@/pages/AdminPanelPage';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { MainPage } from '@/pages/Main';
import { NotFoundPage } from '@/pages/NotFoudPage';
import { ProfilePage } from '@/pages/ProfilePage';
import {
    AppRouters,
    getRouteAbout,
    getRouteAdminPanel,
    getRouteArticleCreate,
    getRouteArticleEdit,
    getRouteArticles,
    getRouteForbidden,
    getRouteMain,
    getRouteArticleDetails,
    getRouteProfile,
} from '@/shared/const/router';
import { AppRouterProps } from '@/shared/types/router';

export const routeConfig: Record<AppRouters, AppRouterProps> = {
    [AppRouters.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
    },
    [AppRouters.ABOUT]: {
        path: getRouteAbout(),
        element: <AboutPage />,
    },
    [AppRouters.PROFILE]: {
        path: getRouteProfile(':id'),
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRouters.ARTICLES]: {
        path: getRouteArticles(),
        element: <ArticlesPage />,
        authOnly: true,
    },
    [AppRouters.ARTICLE_DETAILS]: {
        path: getRouteArticleDetails(':id'),
        element: <ArticleDetailsPage />,
        authOnly: true,
    },
    [AppRouters.ARTICLE_CREATE]: {
        path: getRouteArticleCreate(),
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AppRouters.ARTICLE_EDIT]: {
        path: getRouteArticleEdit(':id'),
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AppRouters.ADMIN_PANEL]: {
        path: getRouteAdminPanel(),
        element: <AdminPanelPage />,
        authOnly: true,
        roles: [UserRole.ADMIN, UserRole.MANAGER],
    },
    [AppRouters.FORBIDDEN]: {
        path: getRouteForbidden(),
        element: <ForbiddenPage />,
    },
    [AppRouters.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
    },
};
