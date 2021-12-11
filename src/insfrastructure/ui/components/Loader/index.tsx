import React from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';
import {LOADER} from '../../../assets/animations';
import {styles} from './styles';

interface LoaderProps {
  isloading: boolean;
}

export default function Loader({isloading}: LoaderProps): JSX.Element | null {
  if (!isloading) {
    return null;
  }
  return (
    <View style={styles.container}>
      <LottieView source={LOADER} autoPlay loop style={styles.loader} />
    </View>
  );
}
