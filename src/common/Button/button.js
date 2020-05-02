import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import Styles from './buttonStyles';

const Button = (props) => {
  const { onPress, buttonLabel, buttonStyle } = props;
  return (
    <TouchableOpacity
    style={[Styles.button, buttonStyle]}
    onPress={onPress}
    >
    <Text style={Styles.label}>{buttonLabel}</Text>
    </TouchableOpacity>
  )
}

export default  Button ;