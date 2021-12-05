import React from 'react';
import {FlatList, View} from 'react-native';
import {styles} from './styles';
import Market from './Market';
import {CurrencyMarketDTO} from '../../../../../dto/CurrencyDTO';
import Text from '../../../../components/Text';

interface MarketsListProps {
  markets: Array<CurrencyMarketDTO>;
}

const rows = [
  {
    id: 1,
    name: 'Exchange',
  },
  {
    id: 2,
    name: 'Pair',
  },
  {
    id: 3,
    name: 'Vol. 24',
  },
  {
    id: 4,
    name: 'Price',
  },
];

export default function MarketsList({markets}: MarketsListProps): JSX.Element {
  function renderItem({item}: any): JSX.Element {
    return <Market market={item} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerRows}>
        {rows.map(row => (
          <View key={row.id} style={styles.row}>
            <Text customStyles={styles.nameRow}>{row.name}</Text>
          </View>
        ))}
      </View>
      <FlatList
        data={markets}
        renderItem={renderItem}
        keyExtractor={item => `${item.name}_${item.price_usd}`}
      />
    </View>
  );
}
