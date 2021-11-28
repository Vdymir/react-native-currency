import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import getSampleCurrencyData from './CurrencyPresenter';
import {styles} from './styles';
import CustomStatusBar from '../../components/CustomStatusBar';
import colors from '../../../../themes/colors';
import Text from '../../components/Text';
import ListCurrency from '../../components/Home/ListCurrency';
import {ResponseCurrency} from '../../../data/Currency/Currency';

export default function Home(): JSX.Element {
  const [currencies, setCurrencies] = useState<ResponseCurrency[]>([]);

  async function getSampleCurrencyDataHandler() {
    const resCurrencies = await getSampleCurrencyData();
    setCurrencies(resCurrencies.list);
  }
  useEffect(() => {
    getSampleCurrencyDataHandler().then();
  }, []);

  return (
    <View style={styles.container}>
      <CustomStatusBar
        barStyle="light-content"
        backgroundColor={colors.primary}
      />
      <View style={styles.main}>
        <Text customStyles={styles.text}>Currency Data</Text>
        <ListCurrency currencies={currencies} />
      </View>
    </View>
  );
}
