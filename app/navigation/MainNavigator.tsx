import React from 'react';
import OwnBottomTabs from './OwnBottomTabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  AllProducts,
  AuthScreen,
  OrderScreen,
  ProductDetailsScreen,
  SplashScreen,
  UserInfoScreen,
} from '../screens';

const Stack = createStackNavigator();

const MainNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={OwnBottomTabs} />
        <Stack.Screen name="AuthScreen" component={AuthScreen} />
        <Stack.Screen name="OrderScreen" component={OrderScreen} />
        <Stack.Screen name="AllProducts" component={AllProducts} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="UserInfoScreen" component={UserInfoScreen} />
        <Stack.Screen
          name="ProductDetailsScreen"
          component={ProductDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
