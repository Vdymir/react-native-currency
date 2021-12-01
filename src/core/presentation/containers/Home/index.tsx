import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import getSampleCurrencyData from './CurrencyPresenter';
import {styles} from './styles';
import CustomStatusBar from '../../components/shared/CustomStatusBar';
import colors from '../../../../themes/colors';
import Text from '../../components/shared/Text';
import ListCurrency from '../../components/Home/ListCurrency';
import {ResponseCurrency} from '../../../data/Currency/Currency';
import SearchBox from '../../components/shared/SearchBox';

export default function Home(): JSX.Element {
  const [currencies, setCurrencies] = useState<ResponseCurrency[]>([]);
  const [copyCurrencies, setCopyCurrencies] = useState<ResponseCurrency[]>([]);
  const [query, setQuery] = useState<string>('');

  async function getSampleCurrencyDataHandler() {
    const resCurrencies = await getSampleCurrencyData();
    setCurrencies(resCurrencies.list);
    setCopyCurrencies(resCurrencies.list);
  }
  function handlerSearchCurrency(value: string) {
    const expresion = new RegExp(`${value.toUpperCase()}.*`, 'i');
    const currenciesFound = copyCurrencies.filter(currency =>
      expresion.test(currency.name),
    );
    setQuery(value);
    setCurrencies(currenciesFound);
  }
  useEffect(() => {
    getSampleCurrencyDataHandler().catch();
  }, []);

  return (
    <View style={styles.container}>
      <CustomStatusBar
        barStyle="light-content"
        backgroundColor={colors.primary}
      />
      <View style={styles.main}>
        <Text customStyles={styles.text}>Currency Data</Text>
        <View style={styles.containerSearchBox}>
          <SearchBox handler={handlerSearchCurrency} value={query} />
        </View>
        <ListCurrency currencies={currencies} />
      </View>
    </View>
  );
}
