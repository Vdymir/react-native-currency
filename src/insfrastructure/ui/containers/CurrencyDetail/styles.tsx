import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import colors from '../../../themes/colors';
interface Styles {
  container: ViewStyle;
  text: TextStyle;
  priceUsd: TextStyle;
  priceBtc: TextStyle;
  main: ViewStyle;
  header: ViewStyle;
  containerSearchBox: ViewStyle;
  percents: ViewStyle;
  containerPrices: ViewStyle;
  containerMarkets: ViewStyle;
}
export const styles = StyleSheet.create<Styles>({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  main: {
    flex: 1,
    paddingHorizontal: 18,
  },
  text: {
    color: colors.white,
    fontSize: 22,
    textAlign: 'center',
    flex: 1,
  },
  containerSearchBox: {
    marginVertical: 14,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  percents: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  priceUsd: {
    fontSize: 24,
    color: colors.white,
  },
  priceBtc: {
    color: colors.white,
  },
  containerPrices: {
    marginTop: 20,
    backgroundColor: 'red',
    paddingHorizontal: 22,
    paddingVertical: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerMarkets: {
    marginTop: 20,
  },
});
