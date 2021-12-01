import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import colors from '../../../../../../themes/colors';
interface Styles {
  container: ViewStyle;
  text: TextStyle;
  percentage: TextStyle;
  containerPrices: ViewStyle;
  infoCurrency: ViewStyle;
  containerNameCurrency: ViewStyle;
  iconCurrency: ImageStyle;
}
export const _styles = (isNegative: boolean) =>
  StyleSheet.create<Styles>({
    container: {
      backgroundColor: colors.secondary,
      marginBottom: 10,
      paddingHorizontal: 14,
      paddingVertical: 14,
      borderRadius: 6,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    containerPrices: {
      alignItems: 'flex-end',
    },
    iconCurrency: {
      width: 30,
      height: 30,
    },
    infoCurrency: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    containerNameCurrency: {
      marginLeft: 12,
    },
    text: {
      color: colors.white,
    },
    percentage: {
      color: isNegative ? colors.darkred : colors.darkgreen,
    },
  });
