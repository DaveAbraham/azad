import {Text, View, Animated} from 'react-native';
import * as React from 'react';
import {styles} from './styles';
import {useLayoutEffect, useState} from 'react';
import AppButton from '../../components/AppButton';
import {useNavigation} from '@react-navigation/native';

const DetailScreen = () => {
  const [fadeAnim] = useState(new Animated.Value(0));
  const naviagation = useNavigation();

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };
  useLayoutEffect(() => {
    fadeIn();
  }, []);
  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          flex: 1,
          opacity: fadeAnim,
          backgroundColor: 'red',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}>
        <Text>Home Screen</Text>
        <AppButton
          onPress={() => naviagation.navigate('Home')}
          title={'Go To Home'}
        />
      </Animated.View>
    </View>
  );
};

export default DetailScreen;
