import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import PagerView from 'react-native-pager-view';
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
import Notifikasi from './notifikasi/Notifikasi';
import Bahasa from './bahasa/Bahasa';
import Pembaruan from './pembaruan/Pembaruan';
import Undang from './undang/Undang';
import Color from './colorManagers/Color';
import Penyimpanan from './penyimapanan/Penyimpanan';
import Bantuuan from './bantuan/Bantuuan';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MyTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
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
      <Tab.Screen name="Notifikasi" component={Notifikasi} />
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
        <Stack.Screen name="Home" component={MyTab} />
        <Stack.Screen name="Masuk" component={Masuk} />
        <Stack.Screen name="Tautan" component={Tautan} />
        <Stack.Screen name="Barcode" component={Barcode} />
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// gesture untu swipe

// function MyTabs() {
//   return (
//     <GestureHandlerRootView style={{flex: 1}}>
//       <PagerView style={{flex: 1}} initialPage={0}>
//         <View key="1">
//           <Home />
//         </View>
//         <View key="2">
//           <Notifikasi />
//         </View>
//         <View key="3">
//           <Setelan />
//         </View>
//       </PagerView>
//     </GestureHandlerRootView>
//   );
// }
