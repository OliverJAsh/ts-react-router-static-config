import unionize, { ofType, UnionOf } from 'unionize';
import { HomeResponse, UserResponse } from './response-types';

export const Action = unionize({
    HandleHomeResponse: ofType<{ response: HomeResponse }>(),
    HandleUserResponse: ofType<{ response: UserResponse }>(),
});
export type Action = UnionOf<typeof Action>;
