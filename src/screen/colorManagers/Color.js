import React, {useState} from 'react';
import {
  StatusBar,
  Text,
  TouchableOpacity,
  useAnimatedValue,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Color = () => {
  const [nyala, setNyala] = useState(false);
  const handlerTheme = () => {
    setNyala(!nyala);
    setTimeout(() => {
      AsyncStorage.setItem('theme', nyala ? '1' : '0');
    }, 3000);
    console.log(nyala);
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: nyala ? '#091114' : 'white',
      }}>
      <StatusBar backgroundColor={nyala ? '#091114' : 'white'} />
      <Text
        style={{
          fontSize: 25,
          color: nyala ? 'white' : 'black',
          fontWeight: nyala ? '400' : '700',
        }}>
        Pilih Mode color kesukaan anda
      </Text>
      <View
        style={{
          width: 120,
          height: 70,
          borderRadius: 50,
          marginTop: 50,
          backgroundColor: nyala ? 'black' : '#70bcff',
          alignItems: nyala ? 'flex-start' : 'flex-end',
        }}>
        <TouchableOpacity
          style={{
            width: 70,
            height: 70,
            borderRadius: 100,
            backgroundColor: '#7e985c',
          }}
          onPress={() => handlerTheme()}></TouchableOpacity>
      </View>
    </View>
  );
};

export default Color;
