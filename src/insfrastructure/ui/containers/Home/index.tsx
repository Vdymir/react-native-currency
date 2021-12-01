import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import CustomStatusBar from '../../components/CustomStatusBar';
import colors from '../../../themes/colors';
import Text from '../../components/Text';
import ListCurrency from './components/ListCurrency';
import SearchBox from './components/SearchBox';

export default function Home(): JSX.Element {
  const [currencies, setCurrencies] = useState<[]>([]);
  const [copyCurrencies, setCopyCurrencies] = useState<[]>([]);
  const [query, setQuery] = useState<string>('');

  function handlerSearchCurrency(value: string) {
    const expresion = new RegExp(`${value.toUpperCase()}.*`, 'i');
    const currenciesFound = copyCurrencies.filter(
      currency => console.log(currency),
      //expresion.test(currency.name),
    );
    setQuery(value);
    //setCurrencies(currenciesFound);
  }

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
