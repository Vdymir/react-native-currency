import React from 'react';
import {ColorValue, StatusBar, StatusBarStyle, View} from 'react-native';
import {styles} from './styles';

interface StatusBarProps {
  backgroundColor?: ColorValue;
  barStyle?: StatusBarStyle;
}

export default function CustomStatusBar({
  backgroundColor,
  barStyle,
}: StatusBarProps): JSX.Element {
  return (
    <View style={[styles.statusBar, {backgroundColor}]}>
      <StatusBar
        barStyle={barStyle}
        translucent
        backgroundColor={backgroundColor}
      />
    </View>
  );
}
