import { Option } from 'fp-ts/lib/Option';

export const getOption = <T>(option: Option<T>) =>
    option.getOrElseL(() => {
        throw new Error('Expected value');
    });
