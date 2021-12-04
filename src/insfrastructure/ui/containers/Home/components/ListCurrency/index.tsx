import React from 'react';
import {FlatList, View} from 'react-native';
import {styles} from './styles';
import Currency from './Currency';

interface ListCurrencyProps {
  currencies: Array<any>;
  getCurrencies: () => any;
  loading: boolean;
}

export default function ListCurrency({
  currencies,
  getCurrencies,
                                       loading
}: ListCurrencyProps): JSX.Element {
  function renderItem({item}: any): JSX.Element {
    return <Currency currency={item} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={currencies}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        refreshing={loading}
        onRefresh={getCurrencies}
      />
    </View>
  );
}
