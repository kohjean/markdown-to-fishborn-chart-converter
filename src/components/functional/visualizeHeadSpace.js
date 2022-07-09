/**
 * @param {string} text
 * @return {string}
 */

export const visualizeHeadSpace = (text) =>
  text.replace(/^[ |⊔]+/, (match) => '⊔'.repeat(match.length));
