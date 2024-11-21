import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Balik} from '../../assets';

const Tautan = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#11191c'}}>
      <View
        style={{
          backgroundColor: '#001414',
          paddingBottom: 15,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity>
          <Image
            source={Balik}
            style={{width: 21, height: 32, marginLeft: 15}}
          />
        </TouchableOpacity>
        <Text style={{marginLeft: 15, fontSize: 17, color: 'white'}}>
          Perangkat Tertaut
        </Text>
      </View>
      <View
        style={{
          height: 0.5,
          width: '100%',
          borderWidth: 0.5,
          borderColor: 'grey',
        }}></View>
      <View style={{width: '100%', height: 300, backgroundColor: '#001414'}}>
        <View style={{flexDirection: 'row'}}>
          <Image />
          <Image />
        </View>
      </View>
    </View>
  );
};

export default Tautan;
