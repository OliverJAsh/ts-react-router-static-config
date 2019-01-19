import { BasePathPart, HomeRouteData, UserRouteData } from './types';

export const getPathnameFromParts = (parts: string[]) => `/${parts.join('/')}`;

//

export const getHomePath = ({  }: HomeRouteData) => getPathnameFromParts([]);
export const getUserPath = ({ username }: UserRouteData) =>
    getPathnameFromParts([BasePathPart.User, username]);
