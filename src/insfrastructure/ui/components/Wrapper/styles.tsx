import {StyleSheet, ViewStyle} from 'react-native';
import colors from '../../../themes/colors';
interface Styles {
  container: ViewStyle;
  main: ViewStyle;
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
});
