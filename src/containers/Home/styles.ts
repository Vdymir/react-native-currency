import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import colors from '../../themes/colors';
interface Styles {
  container: ViewStyle;
  text: TextStyle;
}
export const styles = StyleSheet.create<Styles>({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  text: {
    color: colors.white,
  },
});
