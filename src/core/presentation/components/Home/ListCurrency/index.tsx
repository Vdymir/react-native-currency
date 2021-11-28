import React from 'react';
import {FlatList, View} from 'react-native';
import {styles} from './styles';
import {ResponseCurrency} from '../../../../data/Currency/Currency';
import Currency from './Currency';

interface ListCurrencyProps {
  currencies: Array<ResponseCurrency>;
}

export default function ListCurrency({
  currencies,
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
      />
    </View>
  );
}
