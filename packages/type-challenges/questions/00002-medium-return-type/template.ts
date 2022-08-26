/**
 * Implement the built-in ReturnType<T> generic without using it.
 *
 *
 * const fn = (v: boolean) => {
 *   if (v)
 *     return 1
 *   else
 *     return 2
 * }
 *
 * type a = MyReturnType<typeof fn> // "1 | 2"
 *
 *
 * https://github.com/type-challenges/type-challenges/issues/2
 *
 * https://github.com/Microsoft/TypeScript/pull/21496
 */
type MyReturnType<T> = T extends (...args: any) => infer R ? R : never;

// type MyReturnType<T extends Function> =
//   T extends (...args: any) => infer R
//     ? R
//     : never
