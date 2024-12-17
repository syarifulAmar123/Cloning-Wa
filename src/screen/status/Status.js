import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import {Cam, Search, Setings} from '../../assets';

export default function ({navigation}) {
  const [seting, setSeting] = useState(false);
  return (
    <View style={{flex: 1, backgroundColor: '#001414'}}>
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
          Pembaruan
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
    </View>
  );
}

const styles = StyleSheet.create({});
