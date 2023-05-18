import { RouteProps } from 'react-router-dom';
// eslint-disable-next-line check-imports-plugin/layer-imports
import { UserRole } from '@/entities/User';

export type AppRouterProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
};
