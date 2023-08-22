import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {styles} from './styles';

const AppButton = props => {
  const {title, onPress} = props;

  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
        <Text style={{borderRadius:16,width:"100%",height:"100%",textAlignVertical:"center",textAlign:"center",backgroundColor:"green"}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;
