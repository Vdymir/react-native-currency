import React from 'react';
import {View} from 'react-native';
import Text from '../../../../components/Text';
import {styles} from './styles';

interface ContainerPercentProps {
  label: string;
  percent: string;
}

export default function ContainerPercent({
  label,
  percent,
}: ContainerPercentProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Text customStyles={styles.text}>{label}</Text>
      <Text customStyles={styles.text}>{percent}</Text>
    </View>
  );
}
