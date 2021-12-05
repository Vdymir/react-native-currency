import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import colors from '../../../../../themes/colors';
import fonts from '../../../../../themes/fonts';
interface Styles {
  container: ViewStyle;
  text: TextStyle;
  title: TextStyle;
}
export const _styles = (isNegative: boolean) =>
  StyleSheet.create<Styles>({
    container: {
      justifyContent: 'space-between',
      flex: 1,
    },
    text: {
      color: isNegative ? colors.darkred : colors.darkgreen,
      textAlign: 'center',
    },
    title: {
      ...fonts.bold,
      color: colors.white,
      textAlign: 'center',
      marginBottom: 4,
    },
  });
