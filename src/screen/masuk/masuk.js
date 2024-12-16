import React, {useState} from 'react';
import {
  Alert,
  FlatList,
  Image,
  Modal,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Back,
  Balik,
  Cam,
  Emot,
  Hp,
  kirim,
  Mic,
  PaperClip,
  Three,
  VC,
} from '../../assets';

const Masuk = ({route, navigation}) => {
  const {poto, nama} = route?.params;
  const [amar, setAmar] = useState([]);
  const [baru, setBaru] = useState('');
  const [ganti, setGanti] = useState(false);
  const [visible, setVisible] = useState(false);
  const [textInputHeight, setTextInputHeight] = useState(40);

  const handlerIcon = () => {
    if (baru.length > 0) {
      setGanti(true);
    } else {
      setGanti(false);
    }
  };

  const addTodo = () => {
    if (baru.trim() !== '') {
      let randomNumber = Math.random();
      let news = [...amar, {id: randomNumber, Text: baru}];
      setAmar(news);
      setBaru('');
      setTextInputHeight(40);
    } else {
      Alert.alert('Isikan terlebih dahulu');
    }
  };

  const renderItem = ({item}) => {
    if (item.Text === '') {
      return null;
    }
    return (
      <View
        style={{
          padding: 10,
          borderRadius: 10,
          marginTop: 5,
          flexDirection: 'row',
          justifyContent: 'flex-end',
          backgroundColor: '#134d37',
          maxWidth: '80%',
          alignSelf: 'flex-end',
          marginHorizontal: 10,
        }}>
        <Text
          style={{
            fontSize: 15,
            color: 'white',
            fontFamily: 'Roboto-Regular',
            fontWeight: '400',
          }}>
          {item.Text}
        </Text>
      </View>
    );
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
          marginTop: 10,
        }}>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={Balik}
              style={{width: 25, height: 38, marginLeft: 10}}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setVisible(true)}>
            <Image
              source={typeof poto === 'string' ? {uri: poto} : poto}
              style={{
                width: 40,
                height: 40,
                borderRadius: 50,
                marginHorizontal: 10,
              }}
            />
          </TouchableOpacity>
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
          keyExtractor={item => item.id.toString()}
          style={{marginTop: 20}}
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
            // minHeight: 52,balik
            // maxHeight: '80%',dsadas
            width: 315,
            borderWidth: 1,
            borderColor: 'grey',
            borderRadius: 30,
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 10,
          }}>
          <TouchableOpacity>
            <Image source={Emot} style={{width: 25, height: 25}} />
          </TouchableOpacity>
          <TextInput
            value={baru}
            multiline={true}
            onChangeText={text => {
              setBaru(text);
              handlerIcon();
            }}
            placeholder="Ketik pesan"
            placeholderTextColor={'grey'}
            style={{color: 'white', flex: 1, marginLeft: 10, fontSize: 16}}
            onFocus={() => handlerIcon()}
            onBlur={() => setGanti(false)}
          />
          <TouchableOpacity>
            <Image
              source={PaperClip}
              style={{width: 25, height: 25, marginRight: 5}}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={Cam}
              style={{width: 25, height: 25, marginRight: 5}}
            />
          </TouchableOpacity>
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
            position: 'absolute',
            right: -70,
          }}
          onPress={addTodo}>
          <Image source={ganti ? kirim : Mic} style={{width: 20, height: 20}} />
        </TouchableOpacity>
      </View>
      <Modal visible={visible} transparent={true} animationType="slide">
        <TouchableOpacity
          style={{flex: 1, alignItems: 'center'}}
          onPress={() => setVisible(false)}
          activeOpacity={1}>
          <View
            style={{
              width: 200,
              height: 250,
              marginTop: 200,
              backgroundColor: 'white',
            }}>
            <Image
              source={typeof poto === 'string' ? {uri: poto} : poto}
              style={{width: 200, height: 200}}
              resizeMode="cover"
            />
            <Text
              style={{
                color: 'black',
                fontSize: 21,
                fontWeight: '600',
                textAlign: 'center',
                marginTop: 10,
              }}>
              {nama}
            </Text>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default Masuk;
