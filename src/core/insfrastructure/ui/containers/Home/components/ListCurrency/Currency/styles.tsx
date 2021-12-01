import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import colors from '../../../../../../../../themes/colors';
interface Styles {
  container: ViewStyle;
  text: TextStyle;
  containerPrices: ViewStyle;
}
export const styles = StyleSheet.create<Styles>({
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
  text: {
    color: colors.white,
  },
});
