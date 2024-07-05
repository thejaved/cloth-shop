import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  AuthScreen,
  CartScreen,
  HomeScreen,
  OrderScreen,
  ProfileScreen,
  SplashScreen,
} from '../screens';
import OwnBottomTabs from './OwnBottomTabs';

const Stack = createStackNavigator();

const MainNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="AuthScreen" component={AuthScreen} />
        <Stack.Screen name="Home" component={OwnBottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
