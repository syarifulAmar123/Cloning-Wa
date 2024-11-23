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
  Amar,
  Android,
  bahasa,
  Balik,
  Barcode,
  bunderUser,
  ChatIcon,
  Daftar,
  Gembok,
  Help,
  Key,
  Notification,
  Search,
  Undangan,
} from '../../assets';

const Setelan = ({navigation}) => {
  const [data, setData] = useState([
    {
      poto: Key,
      title: 'Akun',
      subTitle: 'notifikasi keamanan , ganti nomer',
      screen: 'akun',
    },
    {
      poto: Gembok,
      title: 'Privasi',
      subTitle: 'Blokir kontak , pesan sementara',
      screen: 'Privasi',
    },
    {
      poto: bunderUser,
      title: 'Avatar',
      subTitle: 'Buat , edit, foto profil',
      screen: 'Avatar',
    },
    {
      poto: Daftar,
      title: 'Daftar',
      subTitle: 'kelola orang dan group',
      screen: 'Daftar',
    },
    {
      poto: ChatIcon,
      title: 'Chat',
      subTitle: 'Tema , walpaper, riwayat chat',
      screen: 'Chat',
    },
    {
      poto: Notification,
      title: 'Notifikasi',
      subTitle: 'Pesan, grup & nada dering panggilan',
      screen: 'Notifikasi',
    },
    {
      poto: Key,
      title: 'Penyimpanan dan Data',
      subTitle: 'Penggunaan jaringan, unduh otomatis',
      screen: 'Penyimpanan',
    },
    {
      poto: bahasa,
      title: 'Bahasa Aplkasi',
      subTitle: 'Bahasa indonesia (bahasa perangkat)',
      screen: 'Bahasa',
    },
    {
      poto: Help,
      title: 'Bantuan',
      subTitle: 'Pusat bantuan, hubungi kami,',
      screen: 'Bantuuan',
    },
    {
      poto: Undangan,
      title: 'Undang teman',
      screen: 'Undang',
    },
    {
      poto: Android,
      title: 'Pembaruan aplikasi',
      screen: 'Pembaruan',
    },
  ]);
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{flexDirection: 'row', margin: 20}}
        onPress={() => navigation.navigate(item.screen)}>
        <Image
          source={item.poto}
          style={{width: 25, height: 25, marginTop: 5}}
        />
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
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: 20,
            borderBottomWidth: 0.2,
            borderColor: '#2b3338',
            paddingBottom: 15,
          }}>
          <Image
            source={Amar}
            style={{
              width: 60,
              height: 60,
              borderRadius: 35,
              marginRight: -20,
              marginLeft: 10,
            }}
          />
          <View>
            <Text style={{color: 'white', fontSize: 16, fontWeight: '500'}}>
              Amaeer
            </Text>
            <Text
              style={{
                color: 'grey',
                fontSize: 13,
                fontWeight: '500',
                marginTop: 5,
              }}>
              Sedang menertawakan hidup
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('barcode')}>
            <Image source={Barcode} style={{width: 30, height: 30}} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={AddGroup}
              style={{width: 30, height: 30, marginLeft: -20}}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          nestedScrollEnabled={true}
        />
        <Text style={{fontSize: 14, color: 'grey', margin: 20}}>
          juga dari Meta
        </Text>
      </ScrollView>
    </View>
  );
};

export default Setelan;
