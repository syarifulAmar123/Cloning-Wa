import React, {useState} from 'react';
import {
  Alert,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {kirim} from '../../assets';

const Masuk = () => {
  const [amar, setAmar] = useState([]);
  const [baru, setBaru] = useState('');

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
    <View style={{flex: 1, padding: 20, backgroundColor: '#0d1c23'}}>
      {amar.length > 0 && (
        <FlatList
          data={amar}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
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
          <Image />
          <TextInput
            value={baru}
            onChangeText={text => setBaru(text)}
            placeholder="Ketik pesan"
            placeholderTextColor={'grey'}
            style={{color: 'white', flex: 1, marginLeft: 10}}
          />
          <Image />
          <Image />
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
          <Image source={kirim} style={{width: 20, height: 20}} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Masuk;
