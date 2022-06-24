/**
 * [sm, md, lg, xl]
 * @example 
 * ```jsx
 * <Component
 *  css={{
 *    [mq[0]]: {
 *      size: "2rem", 
 *    }
 *  }}
 * />
 * ```
 */

const breakpoints = [576, 768, 1024, 1280];

export const mq = breakpoints.map((bp) => `@media(min-width: ${bp}px)`);
