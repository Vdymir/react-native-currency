import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import CustomStatusBar from '../../components/CustomStatusBar';
import colors from '../../../themes/colors';

interface WrapperProps {
  children: React.ReactNode;
}

export default function Wrapper({children}: WrapperProps): JSX.Element {
  return (
    <View style={styles.container}>
      <CustomStatusBar
        barStyle="light-content"
        backgroundColor={colors.primary}
      />
      <View style={styles.main}>{children}</View>
    </View>
  );
}
