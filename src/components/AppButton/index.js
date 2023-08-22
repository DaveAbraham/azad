import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {styles} from './styles';

const AppButton = props => {
  const {title, onPress} = props;

  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
        <Text style={styles.titleText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;
