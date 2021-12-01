import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {_styles} from './styles';
import Text from '../../../../../components/Text';
import {StackScreenProps} from '@react-navigation/stack';
import {generateUrlImage, selectFormatPercent } from "../../../../../../helpers";

export type RootStackParamList = {
  Home: undefined;
  CurrencyDetail: undefined;
};
interface ListCurrencyProps {
  currency: any;
}

type navigationProps = StackScreenProps<RootStackParamList, 'Home'>;

export default function Currency({currency}: ListCurrencyProps): JSX.Element {
  function handlePressCurrency() {
    //navigation.push('currencyDetail');
  }
  const styles = _styles(selectFormatPercent(currency.percent_change_24h));
  return (
    <TouchableOpacity onPress={handlePressCurrency} style={styles.container}>
      <View style={styles.infoCurrency}>
        <Image
          style={styles.iconCurrency}
          resizeMode="contain"
          source={{uri: generateUrlImage(currency.nameid)}}
        />
        <View style={styles.containerNameCurrency}>
          <Text customStyles={styles.text}>{currency.name}</Text>
          <Text customStyles={styles.text}>{currency.price_btc}</Text>
        </View>
      </View>
      <View style={styles.containerPrices}>
        <Text customStyles={styles.text}>$ {currency.price_usd}</Text>
        <Text customStyles={styles.percentage}>{currency.percent_change_24h}%</Text>
      </View>
    </TouchableOpacity>
  );
}
