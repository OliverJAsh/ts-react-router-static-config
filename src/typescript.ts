// `Object.keys` does not return the keys as string literals, only strings. Use this helper as a
// workaround. https://github.com/Microsoft/TypeScript/pull/12253#issuecomment-263132208
export const keys = <O extends object>(obj: O) => Object.keys(obj) as Array<keyof O>;

export const getProperty = <T>(obj: T) => <K extends keyof T>(key: K): T[K] => obj[key];
