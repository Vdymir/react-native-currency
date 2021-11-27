import React from 'react';
import {StyleProp, Text as Tx, ViewStyle} from 'react-native';
import {styles} from './styles';

interface TextProps {
  children: React.ReactNode;
  customStyles?: StyleProp<ViewStyle>;
}

const Text: React.FC<TextProps> = ({children, customStyles}): JSX.Element => {
  return (
    <Tx style={{...styles.text, ...(customStyles as object)}}>{children}</Tx>
  );
};
export default Text;
