import React from 'react';
import {Image, Text, View} from 'react-native';
import {Amar, QR} from '../../assets';

const Barcode = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <View
        style={{
          width: 300,
          height: 300,
          borderRadius: 20,
          backgroundColor: '#001414',
          justifyContent: 'center',
          alignSelf: 'center',
          alignItems: 'center',
          marginTop: 150,
        }}>
        <Image
          source={Amar}
          style={{
            width: 50,
            height: 50,
            borderRadius: 30,
            marginTop: -50,
          }}
        />
        <Text style={{color: 'white', fontSize: 12, marginTop: 10}}>
          Amaeer
        </Text>
        <Text style={{color: 'grey', fontSize: 12, marginTop: 5}}>
          Kontak WhatApp
        </Text>
        <Image
          source={QR}
          style={{width: 180, height: 180, borderRadius: 10, marginTop: 20}}
        />
      </View>
      <Text
        style={{
          color: 'grey',
          fontSize: 13,
          textAlign: 'center',
          marginHorizontal: 40,
          marginTop: 15,
        }}>
        Kode QR Anda bersifat privasi . Jika Anda membagikannya kepada orang
        lain , mereka dapat memindainya dengan kamera WhatsApp dan menambahkan
        Anda sebagi kontak
      </Text>
    </View>
  );
};

export default Barcode;
