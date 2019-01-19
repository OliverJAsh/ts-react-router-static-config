import { BasePathPart, Route } from './types';
import { getProperty } from './typescript';

// Note: the param names in these path patterns must match the corresponding types.
// Unfortunately there's no easy to way to enforce this with static types.
const _getPathPattern: Record<Route, string> = {
    Home: '/',
    User: `/${BasePathPart.User}/:username`,
};

export const getPathPattern = getProperty(_getPathPattern);
