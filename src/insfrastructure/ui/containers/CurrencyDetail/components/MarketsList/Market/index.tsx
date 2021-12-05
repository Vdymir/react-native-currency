import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import Text from '../../../../../components/Text';
import {CurrencyMarketDTO} from '../../../../../../dto/CurrencyDTO';

interface MarketProps {
  market: CurrencyMarketDTO;
}

export default function Market({market}: MarketProps): JSX.Element {
  console.log(market);
  return (
    <View style={styles.container}>
      <Text customStyles={styles.column}>{market.name}</Text>
      <Text customStyles={styles.column}>
        {market.base} / {market.quote}
      </Text>
      <Text customStyles={styles.column}>{market.volume_usd}</Text>
      <Text customStyles={styles.column}>{market.price}</Text>
    </View>
  );
}
