import React from 'react';
import LottieView from 'lottie-react-native';
import {ERROR} from '../../../assets/animations';
import {styles} from './styles';
import WrapperLottie from '../WrapperLottie';
import Text from '../Text';

interface ErrorProps {
  show: Error;
}

export default function Error({show}: ErrorProps): JSX.Element | null {
  if (!show) {
    return null;
  }
  return (
    <WrapperLottie>
      <LottieView source={ERROR} autoPlay loop style={styles.loader} />
      <Text customStyles={styles.text}>{show.message}</Text>
    </WrapperLottie>
  );
}
