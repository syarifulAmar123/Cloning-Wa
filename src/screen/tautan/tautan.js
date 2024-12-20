import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  Modal,
} from 'react-native';
import {Balik, computer, Phone, Windows} from '../../assets';

const Tautan = ({navigation}) => {
  const openWebsite = () => {
    Linking.openURL(
      'https://faq.whatsapp.com/378279804439436/?cms_platform=android&locale=id_ID&eea=0',
    ).catch(err => console.error('An error occurred', err));
  };
  const [visible, setVisible] = useState(false);
  return (
    <View style={{flex: 1, backgroundColor: '#11191c'}}>
      <View
        style={{
          backgroundColor: '#001414',
          paddingBottom: 15,
          flexDirection: 'row',
          alignItems: 'center',
          
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
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
        <View
          style={{
            flexDirection: 'row',
            marginTop: 30,
            justifyContent: 'space-around',
            marginHorizontal: 50,
          }}>
          <Image source={Phone} style={{width: 100, height: 100}} />
          <Image source={computer} style={{width: 100, height: 100}} />
        </View>
        <Text
          style={{
            color: 'grey',
            fontSize: 12,
            textAlign: 'center',
            marginTop: 50,
          }}>
          Anda dapat menautkan perangkat lain ke akun ini
        </Text>
        <TouchableOpacity onPress={() => openWebsite()}>
          <Text
            style={{
              fontSize: 12,
              color: '#6baaff',
              marginTop: 10,
              textAlign: 'center',
            }}>
            Pelajari selengkapnya
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 350,
            height: 40,
            backgroundColor: '#23c861',
            alignSelf: 'center',
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
          }}
          onPress={() => setVisible(true)}>
          <Text style={{fontSize: 14, color: 'black'}}>Tautkan Perangkat</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 20,
          width: '100%',
          height: 140,
          backgroundColor: '#001414',
        }}>
        <View style={{marginLeft: 20, marginTop: 10}}>
          <Text style={{color: 'grey', fontSize: 12}}>Status Perangkat</Text>
          <Text style={{color: 'grey', fontSize: 12, marginTop: 5}}>
            Ketuk perangkat untuk keluar
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={{
                width: 50,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 50,
                backgroundColor: '#00978b',
                marginTop: 15,
              }}>
              <Image source={Windows} style={{width: 30, height: 30}} />
            </TouchableOpacity>
            <View style={{marginTop: 20, marginLeft: 10}}>
              <Text style={{color: 'white', fontSize: 12}}>Windows</Text>
              <Text style={{color: 'grey', fontSize: 12}}>
                Terakhir aktif hari ini pukul 22.30
              </Text>
            </View>
          </View>
        </View>
      </View>
      <Modal transparent={true} visible={visible} animationType="slide">
        <View
          style={{
            width: 300,
            height: 100,
            backgroundColor: 'hsl(0, 0%, 98%)',
            alignSelf: 'center',
            position: 'absolute',
            bottom: 20,
            borderRadius: 10,
          }}>
          <Text style={{color: 'black', textAlign: 'center', marginTop: 20}}>
            Apakah anda yakin
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 30,
              marginTop: 10,
            }}>
            <TouchableOpacity
              style={{width: 50, height: 50, borderRadius: 10, marginLeft: 10}}
              onPress={() => navigation.navigate('barcode')}>
              <Text style={{color: '#22c860', fontSize: 14}}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{width: 50, height: 50, borderRadius: 10}}
              onPress={() => setVisible(false)}>
              <Text style={{color: '#22c860', fontSize: 14}}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Tautan;
