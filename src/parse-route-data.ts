import { catOptions, head } from 'fp-ts/lib/Array';
import { pipe } from 'fp-ts/lib/function';
import { fromNullable as optionFromNullable, Option } from 'fp-ts/lib/Option';
import { matchPath } from 'react-router';
import { getPathPattern } from './path-patterns';
import { HomeParams, ParseParamsToRouteData, Route, RouteData, UserParams } from './types';
import { getProperty } from './typescript';

const _getParamsParserForRoute: Record<Route, ParseParamsToRouteData<any>> = {
    User: ({ username }: UserParams) => RouteData.User({ username }),
    Home: (params: HomeParams) => RouteData.Home({}),
};
const getParamsParserForRoute = getProperty(_getParamsParserForRoute);

const parseRouteDataForRoute = (pathname: string) => (route: Route): Option<RouteData> => {
    const pattern = getPathPattern(route);
    const parseParamsToRouteData = getParamsParserForRoute(route);
    const maybeMatch = optionFromNullable(matchPath(pathname, { path: pattern, exact: true }));
    return maybeMatch.map(match => match.params).map(parseParamsToRouteData);
};

// Note: the order specified here will be the order in which routes are matched.
// TODO: how can we enforce that this will contain all routes?
const routes: Route[] = ['Home', 'User'];

// Optionally you could return `RouteData.NotFound` instead of `None`.
export const parseRouteData = pipe(
    (pathname: string) => routes.map(parseRouteDataForRoute(pathname)),
    catOptions,
    head,
);
