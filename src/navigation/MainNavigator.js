import React from 'react'
import { Home, ItemDetails } from '../screens'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Strings } from '../constants';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Strings.Home} screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Strings.Home} component={Home} />
        <Stack.Screen name={Strings.ItemDetails} component={ItemDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator