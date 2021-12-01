import {Platform, StyleSheet, ViewStyle} from 'react-native';
import colors from '../../../../../themes/colors';
import fonts from '../../../../../themes/fonts';
interface Styles {
  container: ViewStyle;
  input: ViewStyle;
}

const height: number = Platform.OS === 'ios' ? 51 : 48;
export const styles = StyleSheet.create<Styles>({
  container: {
    borderRadius: 14,
    borderWidth: 0.5,
    borderColor: colors.primaryLight,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    height,
  },
  input: {
    ...fonts.regular,
    fontSize: Platform.OS === 'ios' ? 18 : 14,
    color: colors.white,
    width: '96%',
    marginLeft: 10,
    height,
  },
});
