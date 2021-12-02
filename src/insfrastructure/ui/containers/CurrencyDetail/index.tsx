import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import Text from '../../components/Text';
import Wrapper from '../../components/Wrapper';
import useCurrencyDetail from './hooks/useCurrencyDetail';
import {useAsync} from '../../../hooks';

type routeType = {
  key: string;
  name: string;
  params: string;
};

interface CurrencyDetailProps {
  route: routeType;
}

export default function CurrencyDetail({
  route,
}: CurrencyDetailProps): JSX.Element {
  const {currency, getCurrencyDetail} = useCurrencyDetail(route.params);
  useAsync(getCurrencyDetail);

  console.log('currency', currency);
  return (
    <Wrapper>
      <Text customStyles={styles.text}>{currency.name} Detail</Text>
    </Wrapper>
  );
}
