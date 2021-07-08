// these utils allow users to pass enum values as strings without having to access the enum
// based on the approach suggested by https://github.com/microsoft/TypeScript/issues/17690#issuecomment-321365759,
export const enumify = <T extends { [index: string]: U }, U extends string>(x: T): T => x;
export type Enumify<T> = T[keyof T];
