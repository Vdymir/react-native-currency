import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import colors from '../../../themes/colors';
interface Styles {
  loader: ViewStyle;
  text: TextStyle;
}
export const styles = StyleSheet.create<Styles>({
  loader: {
    width: 250,
    height: 250,
    marginTop: 0,
  },
  text: {
    color: colors.white,
  },
});
