import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import SplashScreen from './splashScreen';
import Home from './home/Home';
import Masuk from './masuk/masuk';
import Setelan from './setelan/Setelan';
import Tautan from './tautan/tautan';
import Barcode from './barcode/barcode';
import Akun from './akun/Akun';
import Privasi from './privasi/Privasi';
import Avatar from './avatar/Avatar';
import Daftar from './daftar/Daftar';
import Chat from './chat/Chat';
import Bahasa from './bahasa/Bahasa';
import Pembaruan from './pembaruan/Pembaruan';
import Undang from './undang/Undang';
import Color from './colorManagers/Color';
import Penyimpanan from './penyimapanan/Penyimpanan';
import Bantuuan from './bantuan/Bantuuan';
import Pindai from './pindai/Pindai';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Balik, Share, Three} from '../assets';
import Status from './status/Status';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Top = createMaterialTopTabNavigator();

const MyJob = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      {/* Header */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          height: 40,
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
        <View style={{flexDirection: 'row', marginTop: 10, right: 5}}>
          <TouchableOpacity>
            <Image source={Share} style={{width: 25, height: 25}} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={Three} style={{width: 25, height: 25}} />
          </TouchableOpacity>
        </View>
      </View>
      {/* Top Tab Navigator */}
      <Top.Navigator
        initialRouteName="Kode saya"
        screenOptions={{
          tabBarStyle: {backgroundColor: '#001414'},
          tabBarIndicatorStyle: {backgroundColor: '#1caa60'},
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
        }}>
        <Top.Screen name="Kode saya" component={Barcode} />
        <Top.Screen name="Pindai" component={Pindai} />
      </Top.Navigator>
    </View>
  );
};

const MyTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {backgroundColor: '#001414'},
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Notifikasi') {
            iconName = focused ? 'notifications' : 'notifications-outline';
          } else if (route.name === 'Setelan') {
            iconName = focused ? 'settings' : 'settings-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#1caa60',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarActiveBackgroundColor: '#001414',
        tabBarInactiveBackgroundColor: '#001414',
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Notifikasi" component={Status} />
      <Tab.Screen name="Setelan" component={Setelan} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Mytab" component={MyTab} />
        <Stack.Screen name="Masuk" component={Masuk} />
        <Stack.Screen name="Tautan" component={Tautan} />
        <Stack.Screen name="MyJob" component={MyJob} />
        <Stack.Screen name="Akun" component={Akun} />
        <Stack.Screen name="Privasi" component={Privasi} />
        <Stack.Screen name="Avatar" component={Avatar} />
        <Stack.Screen name="Daftar" component={Daftar} />
        <Stack.Screen name="Penyimpanan" component={Penyimpanan} />
        <Stack.Screen name="Bahasa" component={Bahasa} />
        <Stack.Screen name="Bantuuan" component={Bantuuan} />
        <Stack.Screen name="Undang" component={Undang} />
        <Stack.Screen name="Pembaruan" component={Pembaruan} />
        <Stack.Screen name="Color" component={Color} />
        <Stack.Screen name="Chat" component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
