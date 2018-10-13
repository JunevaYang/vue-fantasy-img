/**
 *
 * @template T
 * @param {T | Array<T>} any
 * @returns {Array<T>}
 */
function forceToArray(any) {
  return Array.isArray(any) ? any : [any];
}

export { forceToArray };
