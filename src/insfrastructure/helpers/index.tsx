import {NativeModules, Platform} from 'react-native';
const {Toast} = NativeModules;
import {mediaUrl} from '../config';

export const generateUrlImage = (currency: string) =>
  `${mediaUrl}/${currency}.png`;

export const selectFormatPercent = (percent: string) =>
  Math.sign(Number(percent)) === -1;

export const ShowToast = (title: string, message: string, duration: number) => {
  if (Platform.OS === 'ios') {
    Toast.ShowMessage(title, message, duration);
  } else {
    console.log('Toas', Toast)
    Toast.showToast(message, Toast.LONG);
  }
};
