import React from 'react';
import {View} from 'react-native';
import Text from '../../core/presentation/components/Text';
import CustomStatusBar from '../../core/presentation/components/CustomStatusBar';
import colors from '../../themes/colors';
import {styles} from '../../core/presentation/containers/Home/styles';

export default function Home(): JSX.Element {
  return (
    <View style={styles.container}>
      <CustomStatusBar
        barStyle="light-content"
        backgroundColor={colors.primary}
      />
      <Text customStyles={styles.text}>Hola 1</Text>
    </View>
  );
}
