import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import Text from '../../components/Text';
import ListCurrency from './components/ListCurrency';
import SearchBox from './components/SearchBox';
import useCurrency from './hooks/useCurrency';
import {useAsync} from '../../../hooks';
import Wrapper from '../../components/Wrapper';
import Loader from '../../components/Loader';
import Error from "../../components/Error";

export default function Home(): JSX.Element {
  const {currencies, query, getCurrencies, handlerSearchCurrency} =
    useCurrency();
  const {loading, error} = useAsync(getCurrencies);
  console.log('error', error);
  return (
    <Wrapper>
      <Text customStyles={styles.text}>Currency Data</Text>
      <View style={styles.containerSearchBox}>
        <SearchBox handler={handlerSearchCurrency} value={query} />
      </View>
      <Loader isloading={loading} />
      <Error show={error} />
      <ListCurrency
        loading={loading}
        getCurrencies={getCurrencies}
        currencies={currencies}
      />
    </Wrapper>
  );
}
