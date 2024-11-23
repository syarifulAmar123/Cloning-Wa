import React, {useState} from 'react';
import {
  FlatList,
  Image,
  Keyboard,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  AddGroup,
  addPerson,
  Amar,
  Android,
  bahasa,
  Balik,
  Barcode,
  bunderUser,
  ChatIcon,
  Daftar,
  email,
  Gembok,
  Help,
  Key,
  lockUser,
  Notification,
  Paper,
  phone,
  Sandi,
  Search,
  Security,
  Tps,
  Undangan,
} from '../../assets';

const Akun = ({navigation}) => {
  const [data, setData] = useState([
    {
      poto: Security,
      title: 'notifikasi keamanan',
    },
    {
      poto: lockUser,
      title: 'kunci sandi',
    },
    {
      poto: email,
      title: 'Alamat email',
    },
    {
      poto: Sandi,
      title: 'Verifikasi dua langkah',
    },
    {
      poto: phone,
      title: 'Ganti nomor',
    },
    {
      poto: Paper,
      title: 'Minta info akun',
    },
    {
      poto: addPerson,
      title: 'Tambah akun',
    },
    {
      poto: Tps,
      title: 'Hapus akun',
    },
  ]);
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{flexDirection: 'row', marginLeft: 20, marginTop: 20}}>
        <Image source={item.poto} style={{width: 25, height: 25}} />
        <View style={{marginLeft: 20}}>
          <Text style={{fontSize: 15, color: 'white'}}>{item.title}</Text>
          <Text style={{fontSize: 12, color: 'grey', marginTop: 5}}>
            {item.subTitle}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#091114',
      }}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#091114'} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderBottomWidth: 0.2,
          borderColor: '#2b3338',
          paddingBottom: 15,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={Balik}
            style={{width: 21, height: 32, marginLeft: 15}}
          />
        </TouchableOpacity>
        <Text style={{fontSize: 21, color: 'white', marginLeft: 20}}>
          Setelan
        </Text>
        <TouchableOpacity style={{position: 'absolute', right: 20}}>
          <Image source={Search} style={{width: 27, height: 30}} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          nestedScrollEnabled={true}
          style={{marginTop: 5}}
        />
      </ScrollView>
    </View>
  );
};

export default Akun;
