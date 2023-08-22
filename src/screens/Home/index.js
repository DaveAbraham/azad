import {Text, View, Animated} from 'react-native';
import React, {useRef, useLayoutEffect, useEffect} from "react";
import {styles} from './styles';
import AppButton from "../../components/AppButton";
import {useFocusEffect, useNavigation} from "@react-navigation/native";

const HomeScreen = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const navigation = useNavigation()

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };


    const fadeOut = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: true,
        }).start();
    };


  useFocusEffect(()=>{
      fadeIn()
  })


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

        <AppButton onPress={()=> {
            navigation.navigate("Details")
            fadeOut()
        }} title={"Go To Details"}/>
      </Animated.View>
    </View>
  );
};

export default HomeScreen;
