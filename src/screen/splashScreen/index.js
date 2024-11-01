import React, {useEffect} from 'react';
import {StatusBar, Text, View, Image} from 'react-native';
import {Meta, Wa} from '../../assets';

export default function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 3000);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#0d1c23',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -60,
      }}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#0d1c23'} />
      <Image source={Wa} style={{width: 100, height: 100}} />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          bottom: 20,
        }}>
        <Text
          style={{
            fontFamily: 'Roboto-Medium',
            color: 'grey',
            fontWeight: 'bold',
            fontSize: 16,
            textAlign: 'center',
          }}>
          From
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={Meta} style={{width: 30, height: 20, marginTop: 5}} />
          <Text
            style={{
              fontSize: 16,
              fontWeight: '400',
              fontFamily: 'Roboto-Thin',
              color: 'white',
              marginLeft: 5,
            }}>
            Meta
          </Text>
        </View>
      </View>
    </View>
  );
}
