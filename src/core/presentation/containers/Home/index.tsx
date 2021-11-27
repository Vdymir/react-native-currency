import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import getSampleCurrencyData from './CurrencyPresenter';
import {styles} from './styles';
import CustomStatusBar from '../../components/CustomStatusBar';
import colors from '../../../../themes/colors';
import Text from '../../components/Text';

export default function Home(): JSX.Element {
  const [currencies, setCurrencies] = useState([]);

  async function getSampleCurrencyDataHandler() {
    const resCurrencies: any = await getSampleCurrencyData();
    setCurrencies(resCurrencies.list);
  }
  useEffect(() => {
    getSampleCurrencyDataHandler().then();
  }, []);
  console.log('currencies', currencies);
  return (
    <View style={styles.container}>
      <CustomStatusBar
        barStyle="light-content"
        backgroundColor={colors.primary}
      />
      <Text customStyles={styles.text}>Hola</Text>
    </View>
  );
}
