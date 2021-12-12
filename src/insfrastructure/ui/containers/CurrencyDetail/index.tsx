import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import Text from '../../components/Text';
import Wrapper from '../../components/Wrapper';
import useCurrencyDetail from './hooks/useCurrencyDetail';
import {useAsync} from '../../../hooks';
import colors from '../../../themes/colors';
import Icon from 'react-native-vector-icons/AntDesign';
import ContainerPercent from './components/ContainerPercent';
import MarketsList from './components/MarketsList';
import {setThousands} from '../../../lib';
import withNavigator from '../../../hooks/withNavigator';
import Loader from "../../components/Loader";
import Error from "../../components/Error";

type routeType = {
  key: string;
  name: string;
  params: string;
};

interface CurrencyDetailProps {
  route: routeType;
  goBack: () => void;
}

const CurrencyDetail = ({route, goBack}: CurrencyDetailProps): JSX.Element => {
  const {currency, currencyMarkets, fetchAll} = useCurrencyDetail(route.params);
  const {loading, error} = useAsync(fetchAll);
  return (
    <Wrapper>
      <Loader isloading={loading} />
      <Error show={error} />
      {!loading && (
        <>
          <View style={styles.header}>
            <TouchableOpacity onPress={goBack}>
              <Icon name="arrowleft" size={25} color={colors.white} />
            </TouchableOpacity>
            <Text customStyles={styles.text}>{currency.name} Detail</Text>
          </View>

          <View style={styles.containerPrices}>
            <Text customStyles={styles.priceUsd}>
              ${setThousands(currency.price_usd)}
            </Text>
            <Text customStyles={styles.priceBtc}>{currency.price_btc}</Text>
          </View>

          <View style={styles.percents}>
            <ContainerPercent
              label="Change 1h"
              percent={currency.percent_change_1h}
            />
            <ContainerPercent
              label="Change 24h"
              percent={currency.percent_change_24h}
            />
            <ContainerPercent
              label="Change 7d"
              percent={currency.percent_change_7d}
            />
          </View>

          <View style={styles.containerMarkets}>
            <Text customStyles={styles.markets}>Markets</Text>
            <MarketsList markets={currencyMarkets} />
          </View>
        </>
      )}
    </Wrapper>
  );
};
export default withNavigator(CurrencyDetail);
