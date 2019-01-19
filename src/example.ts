import { getActionsForRouteData } from './data-loading';
import { formatRouteData } from './format-route-data';
import { parseRouteData } from './parse-route-data';
import { getHomePath, getUserPath } from './path-formatters';
import { routeAndRender } from './rendering';
import { RouteData } from './types';

const go = async () => {
    console.log('Parsing');
    // string (path) -> Option<RouteData>

    console.log(parseRouteData('/'));
    console.log(parseRouteData('/user/bob'));
    console.log(parseRouteData('/invalid'));

    console.log('Formatting');
    // `RouteData` -> string (path)

    console.log(getHomePath({}));
    console.log(getUserPath({ username: 'bob' }));
    console.log(formatRouteData(RouteData.Home({})));
    console.log(formatRouteData(RouteData.User({ username: 'bob' })));

    console.log('Data loading');

    console.log(await getActionsForRouteData(RouteData.Home({})));
    console.log(await getActionsForRouteData(RouteData.User({ username: 'bob' })));

    console.log('Rendering');

    console.log(routeAndRender('/user/bob'));
};

go();
