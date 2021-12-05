import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import colors from '../../../../../../themes/colors';
interface Styles {
  container: ViewStyle;
  column: TextStyle;
}
export const styles = StyleSheet.create<Styles>({
  container: {
    flex: 0.3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  column: {
    textAlign: 'center',
    flex: 0.3,
    color: colors.white,
    paddingVertical: 4,
  },
});
