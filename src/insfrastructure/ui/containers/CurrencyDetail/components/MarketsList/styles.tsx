import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import colors from "../../../../../themes/colors";
import fonts from "../../../../../themes/fonts";
interface Styles {
  container: ViewStyle;
  row: ViewStyle;
  containerRows: ViewStyle;
  nameRow: TextStyle;
}
export const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
  },
  row: {
    flex: 0.3,
  },
  containerRows: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameRow: {
    ...fonts.bold,
    fontSize: 18,
    color: colors.white,
    textAlign: 'center',
  },
});
