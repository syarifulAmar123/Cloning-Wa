import React from 'react';
import {Image, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import {Balik, Search} from '../../assets';

const Setelan = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#091114',
      }}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#091114'} />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={Balik}
            style={{width: 25, height: 38, marginLeft: 15}}
          />
        </TouchableOpacity>
        <Text style={{fontSize: 24, color: 'white', marginLeft: 20}}>
          Setelan
        </Text>
        <TouchableOpacity style={{position: 'absolute', right: 20}}>
          <Image source={Search} style={{width: 27, height: 30}} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Setelan;
