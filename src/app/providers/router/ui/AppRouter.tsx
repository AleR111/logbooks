import { getAuthUserData } from 'entities/User';
import { AboutPage } from 'pages/About';
import React, {
    memo, Suspense, useCallback, useMemo,
} from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import {
    AppRouterProps,
    AppRouters,
    routeConfig,
} from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';
import { RequireAuth } from './RequireAuth';

export const AppRouter = memo(() => {
    const isAuth = useSelector(getAuthUserData);

    const routers = useMemo(
        () => Object.values(routeConfig).filter((route) => {
            if (!route.authOnly) {
                return true;
            }
            return route.authOnly === !!isAuth;
        }),
        [isAuth],
    );

    const renderWithWrapper = useCallback((route: AppRouterProps) => {
        const element = <div className="page-wrapper">{route.element}</div>;

        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    route.authOnly ? (
                        <RequireAuth>{element}</RequireAuth>
                    ) : (
                        element
                    )
                }
            />
        );
    }, []);

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
        </Suspense>
    );
});
