import _ from 'lodash/fp';

import levidromes from '../levidromes';

export const letters = word => _.range(0, word.length).map(i => word[i]);

const usedLevidromes = [];

export function randomLevidrome() {
  const possibleResult = _.sample(levidromes);

  if (_.isEmpty(possibleResult.definition)) return randomLevidrome();
  if (_.size(possibleResult.word) <= 3) return randomLevidrome();
  if (_.includes(possibleResult.word, usedLevidromes)) return randomLevidrome();

  usedLevidromes.push(possibleResult);
  return possibleResult;
}

export const LETTERS = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
