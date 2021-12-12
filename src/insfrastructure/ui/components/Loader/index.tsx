import React from 'react';
import LottieView from 'lottie-react-native';
import {LOADER} from '../../../assets/animations';
import {styles} from './styles';
import WrapperLottie from '../WrapperLottie';

interface LoaderProps {
  isloading: boolean;
}

export default function Loader({isloading}: LoaderProps): JSX.Element | null {
  if (!isloading) {
    return null;
  }
  return (
    <WrapperLottie>
      <LottieView source={LOADER} autoPlay loop style={styles.loader} />
    </WrapperLottie>
  );
}
