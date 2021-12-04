import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import colors from '../../../themes/colors';
interface Styles {
  container: ViewStyle;
  text: TextStyle;
  main: ViewStyle;
  header: ViewStyle;
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
    flex: 1,
  },
  containerSearchBox: {
    marginVertical: 14,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
