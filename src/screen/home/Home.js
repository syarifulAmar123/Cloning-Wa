import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StatusBar,
  TouchableOpacity,
  Modal,
  TextInput,
  Alert,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {Back, Cam, Chat, Photo, Search, Setings, User} from '../../assets';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({navigation}) => {
  const [isi, setIsi] = useState([
    {nama: 'Amar', poto: require('../../assets/amar.jpg')},
  ]);
  const [value, setValue] = useState('');
  const [photoUri, setPhotoUri] = useState(null);
  const [visible, setVisible] = useState(false);
  const [seting, setSeting] = useState(false);

  const pindah = item => {
    navigation.navigate('Masuk', {poto: item.poto, nama: item.nama});
  };

  const openGallery = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        setPhotoUri(response.assets[0].uri);
      }
    });
  };

  const masukin = () => {
    if (value === '' || !photoUri) {
      Alert.alert('Mohon isi nama dan pilih foto');
    } else {
      const News = [...isi, {nama: value, poto: {uri: photoUri}}];
      setIsi(News);
      setVisible(false);
      setValue('');
      setPhotoUri(null);
    }
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        flex: 1,
        marginHorizontal: 15,
        marginVertical: 15,
      }}
      onPress={() => pindah(item)}>
      <Image
        source={item.poto}
        style={{width: 50, height: 50, borderRadius: 35}}
      />
      <Text style={{color: 'white', marginLeft: 10, marginTop: 5}}>
        {item.nama}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={{flex: 1, backgroundColor: '#091114'}}>
      <StatusBar barStyle="light-content" backgroundColor="#091114" />
      <View
        style={{
          width: '100%',
          height: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          marginTop: 15,
        }}>
        <Text
          style={{
            color: 'white',
            fontFamily: 'Roboto-Bold',
            fontSize: 25,
            fontWeight: '800',
          }}>
          WhatsApp
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            position: 'absolute',
            right: 30,
          }}>
          <TouchableOpacity>
            <Image source={Cam} style={{width: 27, height: 27}} />
          </TouchableOpacity>
          <TouchableOpacity style={{marginHorizontal: 20}}>
            <Image source={Search} style={{width: 27, height: 27}} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSeting(true)}>
            <Image source={Setings} style={{width: 27, height: 27}} />
          </TouchableOpacity>
          <Modal transparent={true} visible={seting} animationType="fade">
            <TouchableOpacity
              style={{flex: 1}}
              onPress={() => setSeting(false)}>
              <View
                style={{
                  width: 160,
                  height: 230,
                  backgroundColor: '#11171a',
                  position: 'absolute',
                  right: 5,
                  top: 45,
                  borderRadius: 10,
                }}>
                <TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 16,
                      color: 'white',
                      fontWeight: '400',
                      marginTop: 15,
                      marginLeft: 12,
                    }}>
                    Grup
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 16,
                      color: 'white',
                      fontWeight: '400',
                      marginTop: 15,
                      marginLeft: 12,
                    }}>
                    Siaran baru
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Tautan')}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: 'white',
                      fontWeight: '400',
                      marginTop: 15,
                      marginLeft: 12,
                    }}>
                    Perangkat tertaut
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 16,
                      color: 'white',
                      fontWeight: '400',
                      marginTop: 15,
                      marginLeft: 12,
                    }}>
                    Pesan berbintang
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Setelan')}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: 'white',
                      fontWeight: '400',
                      marginTop: 15,
                      marginLeft: 12,
                    }}>
                    Setelan
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Color')}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: 'white',
                      fontWeight: '400',
                      marginTop: 15,
                      marginLeft: 12,
                    }}>
                    Color manager
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </Modal>
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'grey',
          width: '100%',
          height: 0.5,
        }}
      />
      <FlatList
        data={isi}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        style={{marginTop: 15, marginHorizontal: 10}}
      />
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 50,
          right: 20,
          justifyContent: 'center',
          alignItems: 'center',
          width: 60,
          height: 60,
          borderRadius: 15,
          backgroundColor: '#1daa61',
        }}
        onPress={() => setVisible(true)}>
        <Image source={Chat} style={{width: 25, height: 25}} />
      </TouchableOpacity>
      <Modal visible={visible}>
        <View style={{flex: 1, backgroundColor: '#0d1c23'}}>
          <StatusBar barStyle={'light-content'} backgroundColor={'#001c22'} />
          <View
            style={{
              marginHorizontal: 20,
              marginTop: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Image source={Back} style={{width: 35, height: 30}} />
            </TouchableOpacity>
            <Text
              style={{
                color: 'white',
                fontSize: 19,
                fontFamily: 'Roboto-Medium',
                marginLeft: 15,
                fontWeight: '600',
              }}>
              Kontak baru
            </Text>
          </View>
          <View style={{marginTop: 150}}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 60,
                marginHorizontal: 30,
              }}>
              <Image source={User} style={{width: 30, height: 30}} />
              <View
                style={{
                  flex: 1,
                  borderColor: 'grey',
                  borderBottomWidth: 1,
                  marginHorizontal: 10,
                  marginTop: -20,
                  marginLeft: 20,
                }}>
                <TextInput
                  value={value}
                  onChangeText={text => setValue(text)}
                  placeholder="Nama"
                  placeholderTextColor="grey"
                  style={{color: 'white', fontSize: 14}}
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 60,
                marginHorizontal: 30,
              }}>
              <Image source={Photo} style={{width: 30, height: 30}} />
              <TouchableOpacity
                style={{
                  flex: 1,
                  borderColor: 'grey',
                  borderBottomWidth: 1,
                  marginHorizontal: 10,
                  marginTop: -20,
                  marginLeft: 20,
                  paddingVertical: 10,
                }}
                onPress={() => openGallery()}>
                <Text style={{color: 'grey'}}>
                  {photoUri ? 'Foto Dipilih' : 'Pilih Foto'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            style={{
              width: 300,
              height: 40,
              backgroundColor: '#1daa61',
              marginTop: 100,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 55,
              borderRadius: 15,
            }}
            activeOpacity={0.8}
            onPress={() => masukin()}>
            <Text style={{color: 'black', fontSize: 14}}>Kirim</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default Home;
