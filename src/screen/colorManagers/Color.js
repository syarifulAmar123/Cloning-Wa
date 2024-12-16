import React, {useState} from 'react';
import {
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
  useAnimatedValue,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Balik} from '../../assets';

const Color = ({navigation}) => {
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
      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          top: 0,
          left: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={Balik}
            style={{width: 25, height: 38, marginLeft: 10}}
          />
        </TouchableOpacity>
        <Text style={{fontSize: 18, marginLeft: 20, color: 'white'}}>
          Color manager
        </Text>
      </View>
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
