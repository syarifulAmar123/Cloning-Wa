import React, {useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  Image,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Back, Balik, Hp, kirim, Mic, Three, VC} from '../../assets';

const Masuk = ({route, navigation}) => {
  const {poto, nama} = route?.params;
  const [amar, setAmar] = useState([]);
  const [baru, setBaru] = useState('');
  const [ganti, setGanti] = useState(false);
  const addTodo = () => {
    if (baru.trim() !== '') {
      let randomNumber = Math.random();
      let news = [...amar, {id: randomNumber, nama: baru}];
      setAmar(news);
      setBaru('');
    } else {
      Alert.alert('isikan terlebih dahulu');
    }
  };

  const Delete = id => {
    const Anyar = amar.filter(item => item.id !== id);
    setAmar(Anyar);
  };

  const renderItem = ({item}) => {
    if (item.nama === '') {
      return;
    } else {
      return (
        <View
          style={{
            margin: 20,
            padding: 5,
            borderWidth: 0.5,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 18, color: 'black'}}>{item.nama}</Text>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#263238',
              width: 30,
              height: 30,
            }}
            onPress={() => Delete(item.id)}>
            <Text style={{fontSize: 21, fontWeight: '600', color: 'white'}}>
              -
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#0b141b'}}>
      <View
        style={{
          width: '100%',
          height: 40,
          backgroundColor: '#0b141b',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={Balik}
              style={{width: 25, height: 38, marginLeft: 10}}
            />
          </TouchableOpacity>
          <Image
            source={typeof poto === 'string' ? {uri: poto} : poto}
            style={{
              width: 40,
              height: 40,
              borderRadius: 50,
              marginHorizontal: 10,
            }}
          />
          <Text
            style={{
              fontSize: 20,
              color: 'white',
              marginTop: 5,
              marginLeft: 5,
            }}>
            {nama}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginRight: 5,
          }}>
          <TouchableOpacity>
            <Image
              source={VC}
              style={{width: 30, height: 30, marginRight: 15}}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={Hp}
              style={{width: 30, height: 30, marginHorizontal: 10}}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={Three} style={{width: 30, height: 30}} />
          </TouchableOpacity>
        </View>
      </View>
      {amar.length > 0 && (
        <FlatList
          data={amar}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
      <StatusBar barStyle={'light-content'} backgroundColor={'#0b141b'} />
      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          bottom: 20,
          left: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            height: 52,
            width: 335,
            borderWidth: 1,
            borderColor: 'grey',
            borderRadius: 30,
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 10,
          }}>
          {/* <Image /> */}
          <TextInput
            value={baru}
            onChangeText={text => setBaru(text)}
            placeholder="Ketik pesan"
            placeholderTextColor={'grey'}
            style={{color: 'white', flex: 1, marginLeft: 10}}
            onFocus={() => setGanti(true)}
            onBlur={() => setGanti(false)}
          />
          {/* <Image />
          <Image /> */}
        </View>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#1daa61',
            width: 50,
            height: 50,
            borderRadius: 40,
            marginLeft: 10,
          }}
          onPress={addTodo}>
          <Image source={ganti ? kirim : Mic} style={{width: 20, height: 20}} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Masuk;
