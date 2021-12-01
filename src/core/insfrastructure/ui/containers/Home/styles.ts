import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import colors from '../../../../../themes/colors';
interface Styles {
  container: ViewStyle;
  text: TextStyle;
  main: ViewStyle;
  containerSearchBox: ViewStyle;
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
  },
  containerSearchBox: {
    marginVertical: 14,
  },
});
