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
import { AppRouters, RoutePath } from '@/shared/const/router';
import { AppRouterProps } from '@/shared/types/router';

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
    [AppRouters.ADMIN_PANEL]: {
        path: `${RoutePath[AppRouters.ADMIN_PANEL]}`,
        element: <AdminPanelPage />,
        authOnly: true,
        roles: [UserRole.ADMIN, UserRole.MANAGER],
    },
    [AppRouters.FORBIDDEN]: {
        path: RoutePath[AppRouters.FORBIDDEN],
        element: <ForbiddenPage />,
    },
    [AppRouters.NOT_FOUND]: {
        path: RoutePath[AppRouters.NOT_FOUND],
        element: <NotFoundPage />,
    },
};
