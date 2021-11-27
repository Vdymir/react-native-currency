import React from 'react';
import {ColorValue, StatusBar, StatusBarStyle, View} from 'react-native';
import {styles} from './styles';

interface StatusBarProps {
  backgroundColor?: ColorValue;
  barStyle?: StatusBarStyle;
}

const CustomStatusBar: React.FC<StatusBarProps> = ({
  backgroundColor,
  barStyle,
}): JSX.Element => {
  return (
    <View style={[styles.statusBar, {backgroundColor}]}>
      <StatusBar
        barStyle={barStyle}
        translucent
        backgroundColor={backgroundColor}
      />
    </View>
  );
};
export default CustomStatusBar;
