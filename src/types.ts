export enum BasePathPart {
    User = 'user',
}

export type HomeRouteData = {};
export type UserRouteData = { username: string };

//
// Param types
//

// These types represent the result of `matchPath` when it matches the respective path patterns.

// Note: the param names in these types must match the corresponding path patterns.
// Unfortunately there's no easy to way to enforce this with static types.

export type HomeParams = {};
export type UserParams = { username: string };

//

import { ofType, TagsOf, unionize, UnionOf } from 'unionize';
export const RouteData = unionize(
    {
        Home: ofType<HomeRouteData>(),
        User: ofType<UserRouteData>(),
    },
    { value: 'value' },
);
export type RouteData = UnionOf<typeof RouteData>;

export type Route = TagsOf<typeof RouteData>;

//

export type ParseParamsToRouteData<Params> = (params: Params) => RouteData;
