import { getHomePath, getUserPath } from './path-formatters';
import { RouteData } from './types';

export const formatRouteData = RouteData.match({
    Home: getHomePath,
    User: getUserPath,
});
