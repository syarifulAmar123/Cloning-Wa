import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './splashScreen';
import Home from './home/Home';
import Masuk from './masuk/masuk';
import Setelan from './setelan/Setelan';
import Tautan from './tautan/tautan';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
