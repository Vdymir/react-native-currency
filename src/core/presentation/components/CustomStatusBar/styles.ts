import {StyleSheet, Platform, NativeModules, ViewStyle} from 'react-native';
const {StatusBarManager} = NativeModules;

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 40 : StatusBarManager.HEIGHT;
interface Styles {
  statusBar: ViewStyle;
}
export const styles = StyleSheet.create<Styles>({
  statusBar: {
    height: STATUSBAR_HEIGHT,
    backgroundColor: 'red',
  },
});
