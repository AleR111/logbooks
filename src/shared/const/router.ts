export enum AppRouters {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_CREATE = 'article_create',
    ARTICLE_EDIT = 'article_edit',
    ARTICLE_DETAILS = 'article_details',
    ADMIN_PANEL = 'admin_panel',
    FORBIDDEN = 'forbidden',
    NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteAbout = () => '/about';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteArticles = () => '/articles';
export const getRouteArticleDetails = (id: string) => `/articles/${id}`;
export const getRouteArticleCreate = () => '/articles/new';
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`;
export const getRouteAdminPanel = () => '/admin';
export const getRouteForbidden = () => '/forbidden';

// export const RoutePath: Record<AppRouters, string> = {
//     [AppRouters.MAIN]: getRouteMain(),
//     [AppRouters.ABOUT]: getRouteAbout(),
//     [AppRouters.PROFILE]: getRouteProfile(':id'),
//     [AppRouters.ARTICLES]: getRouteArticles(),
//     [AppRouters.ARTICLE_DETAILS]: getRouteMainArticleDetails(':id'),
//     [AppRouters.ARTICLE_CREATE]: getRouteArticleCreate(),
//     [AppRouters.ARTICLE_EDIT]: getRouteArticleEdit(':id'),
//     [AppRouters.ADMIN_PANEL]: getRouteAdminPanel(),
//     [AppRouters.FORBIDDEN]: getRouteForbidden(),
//     [AppRouters.NOT_FOUND]: '*',
// };
