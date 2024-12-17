import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Amar, Balik, QR, Share, Three} from '../../assets';

const Barcode = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      {/* <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          height: 50,
          backgroundColor: '#001414',
        }}>
        <View style={{flexDirection: 'row', marginLeft: 10, marginTop: 10}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={Balik} style={{width: 25, height: 25}} />
          </TouchableOpacity>

          <Text style={{color: 'white', fontSize: 16, marginLeft: 15}}>
            Kode QR
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <TouchableOpacity>
            <Image source={Share} style={{width: 25, height: 25}} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={Three} style={{width: 25, height: 25}} />
          </TouchableOpacity>
        </View>
      </View> */}
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
            // position: 'absolute',
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
