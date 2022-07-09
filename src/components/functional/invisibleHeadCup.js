/**
 * @param {string} text
 * @return {string}
 */

export const invisibleHeadCup = (text) =>
  text.replace(/^⊔+/, (match) => ' '.repeat(match.length));
