import {StyleSheet, TextStyle} from 'react-native';
import fonts from '../../themes/fonts';
import colors from '../../themes/colors';
interface Styles {
  text: TextStyle;
}
export const styles = StyleSheet.create<Styles>({
  text: {
    ...fonts.regular,
    fontSize: 16,
    color: colors.black,
  },
});
