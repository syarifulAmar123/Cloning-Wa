import React, {useState} from 'react';
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

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
    <View style={{flex: 1, padding: 20}}>
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
          height: 50,
          borderWidth: 1,
          borderColor: 'grey',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 20,
          paddingHorizontal: 10,
        }}>
        <TextInput
          value={baru}
          onChangeText={text => setBaru(text)}
          placeholder="Masukkan yang baru"
          style={{color: 'black', flex: 1}}
        />
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'crimson',
            width: 50,
            height: 50,
          }}
          onPress={addTodo}>
          <Text style={{fontSize: 21, fontWeight: '600', color: 'white'}}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Masuk;
