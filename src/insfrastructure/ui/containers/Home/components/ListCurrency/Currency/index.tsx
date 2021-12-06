import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {_styles} from './styles';
import Text from '../../../../../components/Text';
import {generateUrlImage, selectFormatPercent} from '../../../../../../helpers';
import {setThousands} from '../../../../../../lib';
import withNavigator from '../../../../../../hooks/withNavigator';

interface ListCurrencyProps {
  currency: any;
  goTo: (route: string, params?: any) => void;
}

function Currency({currency, goTo}: ListCurrencyProps): JSX.Element {
  function handlePressCurrency() {
    goTo('currencyDetail', currency.id);
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
        <Text customStyles={styles.text}>
          ${setThousands(currency.price_usd)}
        </Text>
        <Text customStyles={styles.percentage}>
          {currency.percent_change_24h}%
        </Text>
      </View>
    </TouchableOpacity>
  );
}
export default withNavigator(Currency);
