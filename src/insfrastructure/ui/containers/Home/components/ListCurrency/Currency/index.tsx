import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {_styles} from './styles';
import Text from '../../../../../components/Text';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {generateUrlImage, selectFormatPercent} from '../../../../../../helpers';

type RootStackParamList = {
  currencyDetail: undefined;
  currencyDetailComments: {idCurrency: number};
};

interface ListCurrencyProps {
  currency: any;
}

export default function Currency({currency}: ListCurrencyProps): JSX.Element {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, 'currencyDetail'>
    >();
  function handlePressCurrency() {
    navigation.push('currencyDetail', currency.id);
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
        <Text customStyles={styles.percentage}>
          {currency.percent_change_24h}%
        </Text>
      </View>
    </TouchableOpacity>
  );
}
