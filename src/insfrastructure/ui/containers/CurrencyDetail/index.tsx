import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import Text from '../../components/Text';
import Wrapper from '../../components/Wrapper';

export default function CurrencyDetail(): JSX.Element {
  return (
    <Wrapper>
      <Text customStyles={styles.text}>BTC Detail</Text>
    </Wrapper>
  );
}
