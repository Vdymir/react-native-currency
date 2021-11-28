import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {ResponseCurrency} from '../../../../../data/Currency/Currency';
import Text from '../../../../components/Text';
interface ListCurrencyProps {
  currency: ResponseCurrency;
}

export default function Currency({currency}: ListCurrencyProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Text customStyles={styles.text}>{currency.id}</Text>
    </View>
  );
}
