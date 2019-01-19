import { pipe } from 'fp-ts/lib/function';
import * as React from 'react';
import { FC } from 'react';
import { parseRouteData } from './parse-route-data';
import { HomeRouteData, RouteData, UserRouteData } from './types';

const Home: FC<{ homeRouteData: HomeRouteData }> = () => <div>Home</div>;
const User: FC<{ userRouteData: UserRouteData }> = ({ userRouteData }) => (
    <div>User: {userRouteData.username}</div>
);
const NotFound: FC<{}> = () => <div>Not found</div>;

export const renderForRouteData = RouteData.match({
    Home: homeRouteData => <Home homeRouteData={homeRouteData} />,
    User: userRouteData => <User userRouteData={userRouteData} />,
});

export const routeAndRender = pipe(
    parseRouteData,
    maybeRouteData =>
        maybeRouteData.map(renderForRouteData).getOrElseL(() => <NotFound />),
);
