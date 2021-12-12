import {StyleSheet, ViewStyle} from 'react-native';
interface Styles {
  loader: ViewStyle;
}
export const styles = StyleSheet.create<Styles>({
  loader: {
    width: 250,
    height: 250,
    marginTop: 0,
  },
});
