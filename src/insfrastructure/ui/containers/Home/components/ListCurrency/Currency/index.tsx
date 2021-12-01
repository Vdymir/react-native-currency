import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import Text from '../../../../../components/Text';
interface ListCurrencyProps {
  currency: any;
}

export default function Currency({currency}: ListCurrencyProps): JSX.Element {
  return (
    <View style={styles.container}>
      <View>
        <Text customStyles={styles.text}>{currency.name}</Text>
        <Text customStyles={styles.text}>{currency.symbol}</Text>
      </View>
      <View style={styles.containerPrices}>
        <Text customStyles={styles.text}>$ {currency.price_usd}</Text>
        <Text customStyles={styles.text}>{currency.price_btc}</Text>
      </View>
    </View>
  );
}
