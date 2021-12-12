import React, {ReactNode} from 'react';
import {View} from 'react-native';
import {styles} from './styles';

interface WrapperLottieProps {
  children: ReactNode;
}

export default function WrapperLottie({
  children,
}: WrapperLottieProps): JSX.Element {
  return <View style={styles.container}>{children}</View>;
}
