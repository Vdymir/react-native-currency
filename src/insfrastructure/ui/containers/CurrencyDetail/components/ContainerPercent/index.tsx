import React from 'react';
import {View} from 'react-native';
import Text from '../../../../components/Text';
import {_styles} from './styles';
import {selectFormatPercent} from '../../../../../helpers';

interface ContainerPercentProps {
  label: string;
  percent: string;
}

export default function ContainerPercent({
  label,
  percent,
}: ContainerPercentProps): JSX.Element {
  const styles = _styles(selectFormatPercent(percent));
  return (
    <View style={styles.container}>
      <Text customStyles={styles.title}>{label}</Text>
      <Text customStyles={styles.text}>{percent}</Text>
    </View>
  );
}
