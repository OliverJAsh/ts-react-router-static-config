import { pipe } from 'fp-ts/lib/function';
import { Action } from './redux-actions';
import { HomeResponse, UserResponse } from './response-types';
import { HomeRouteData, RouteData, UserRouteData } from './types';

const getDataForHomeRouteData = (routeData: HomeRouteData): Promise<HomeResponse> =>
    Promise.resolve({
        exampleData: 'foo',
    });
const getActionsForHomeRouteData = pipe(
    getDataForHomeRouteData,
    responsePromise => responsePromise.then(response => Action.HandleHomeResponse({ response })),
);

const getDataForUserRouteData = (routeData: UserRouteData): Promise<UserResponse> =>
    Promise.resolve({
        age: 50,
    });
const getActionsForUserRouteData = pipe(
    getDataForUserRouteData,
    responsePromise => responsePromise.then(response => Action.HandleUserResponse({ response })),
);

//
export const getActionsForRouteData = RouteData.match({
    Home: getActionsForHomeRouteData,
    User: getActionsForUserRouteData,
});
