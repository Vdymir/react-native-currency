import {StyleSheet, ViewStyle} from 'react-native';
interface Styles {
  loader: ViewStyle;
  container: ViewStyle;
}
export const styles = StyleSheet.create<Styles>({
  container: {
    alignItems: 'center',
  },
  loader: {
    width: 250,
    height: 250,
    marginTop: 0,
  },
});
