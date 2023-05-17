import React, {
    memo, Suspense, useCallback, useMemo,
} from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { AboutPage } from '@/pages/About';
import { getAuthUserData } from '@/entities/User';
import { routeConfig } from '@/app/providers/router/сonfig/routeConfig';
import { PageLoader } from '@/widgets/PageLoader';
import { RequireAuth } from './RequireAuth';
import { AppRouterProps } from '@/shared/types/router';

export const AppRouter = memo(() => {
    const renderWithWrapper = useCallback((route: AppRouterProps) => {
        const element = <>{route.element}</>;

        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    route.authOnly ? (
                        <RequireAuth roles={route.roles}>{element}</RequireAuth>
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
