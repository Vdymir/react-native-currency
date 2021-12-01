import {mediaUrl} from '../config';

export const generateUrlImage = (currency: string) =>
  `${mediaUrl}/${currency}.png`;

export const selectFormatPercent = (percent: string) =>
  Math.sign(Number(percent)) === -1;
