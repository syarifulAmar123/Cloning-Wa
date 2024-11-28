import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './splashScreen';
import Home from './home/Home';
import Masuk from './masuk/masuk';
import Setelan from './setelan/Setelan';
import Tautan from './tautan/tautan';
import Barcode from './barcode/barcode';
import ujicoba from './ujicooba/ujicoba';
import Akun from './akun/Akun';
import Privasi from './privasi/Privasi';
import Avatar from './avatar/Avatar';
import Daftar from './daftar/Daftar';
import Chat from './chat/Chat';
import Notifikasi from './notifikasi/Notifikasi';
import Penyimpanan from './penyimapanan/Penyimpanan';
import Bahasa from './bahasa/Bahasa';
import Bantuuan from './bantuan/Bantuuan';
import Pembaruan from './pembaruan/Pembaruan';
import Undang from './undang/Undang';
import Color from './colorManagers/Color';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Masuk" component={Masuk} />
        <Stack.Screen name="Setelan" component={Setelan} />
        <Stack.Screen name="Tautan" component={Tautan} />
        <Stack.Screen name="barcode" component={Barcode} />
        <Stack.Screen name="akun" component={Akun} />
        <Stack.Screen name="Privasi" component={Privasi} />
        <Stack.Screen name="Avatar" component={Avatar} />
        <Stack.Screen name="Daftar" component={Daftar} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Notifikasi" component={Notifikasi} />
        <Stack.Screen name="Penyimpanan" component={Penyimpanan} />
        <Stack.Screen name="Bahasa" component={Bahasa} />
        <Stack.Screen name="Bantuuan" component={Bantuuan} />
        <Stack.Screen name="Undang" component={Undang} />
        <Stack.Screen name="Pembaruan" component={Pembaruan} />
        <Stack.Screen name="Color" component={Color} />
        {/* <Stack.Screen name="ujicoba" component={ujicoba} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
