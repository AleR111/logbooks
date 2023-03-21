import { getAuthUserData } from 'entities/User';
import { AboutPage } from 'pages/About';
import React, { memo, Suspense, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';

export const AppRouter = memo(() => {
    const isAuth = useSelector(getAuthUserData);

    const routers = useMemo(
        () => Object.values(routeConfig).filter(
            (route) => {
                if (!route.authOnly) {
                    return true;
                }
                return route.authOnly === !!isAuth;
            },
        ),
        [isAuth],
    );
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {routers.map(({ path, element }) => (
                    <Route
                        key={path}
                        path={path}
                        element={<div className="page-wrapper">{element}</div>}
                    />
                ))}
            </Routes>
        </Suspense>
    );
});
