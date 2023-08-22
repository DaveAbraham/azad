import {Text, View, Animated} from 'react-native';
import React, { useState, useLayoutEffect } from "react";
import {styles} from './styles';
import AppButton from "../../components/AppButton";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const [fadeAnim] = useState(new Animated.Value(0));
  const navigation = useNavigation()

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  useLayoutEffect(() => {
    fadeIn()
  }, []);
  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          flex: 1,
          opacity: fadeAnim,
          backgroundColor: 'blue',
          alignItems:"center",
          justifyContent:"center",
          width:"100%"
        }}>
        <Text style={{color:"#fff"}}>Home Screen</Text>

        <AppButton onPress={()=>navigation.navigate("Details")} title={"Go To Details"}/>
      </Animated.View>
    </View>
  );
};

export default HomeScreen;
