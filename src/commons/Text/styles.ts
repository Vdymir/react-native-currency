import {StyleSheet, TextStyle} from 'react-native';
import fonts from '../../themes/fonts';
interface Styles {
  text: TextStyle;
}
export const styles = StyleSheet.create<Styles>({
  text: {
    ...fonts.regular,
    fontSize: 16,
  },
});
