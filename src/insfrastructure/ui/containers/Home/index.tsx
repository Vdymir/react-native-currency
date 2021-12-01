import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import CustomStatusBar from '../../components/CustomStatusBar';
import colors from '../../../themes/colors';
import Text from '../../components/Text';
import ListCurrency from './components/ListCurrency';
import SearchBox from './components/SearchBox';
import useCurrency from './hooks/useCurrency';
import {useAsync} from '../../../hooks';

export default function Home(): JSX.Element {
  const {currencies, query, getCurrencies, handlerSearchCurrency} =
    useCurrency();
  useAsync(getCurrencies);

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
