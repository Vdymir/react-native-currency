import React from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {styles} from './styles';
import colors from '../../../../../themes/colors';

interface SearchBoxProps {
  handler: (arg0: string) => void;
  value: string;
}

export default function SearchBox({
  handler,
  value,
}: SearchBoxProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Icon name="search1" size={25} color={colors.white} />
      <TextInput
        value={value}
        onChangeText={handler}
        placeholderTextColor={colors.white}
        placeholder="Search ..."
        style={styles.input}
      />
    </View>
  );
}
