import React from 'react'
import { Home, ItemDetails } from '../screens' //importing the screens
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Strings } from '../constants';

// Creating a native stack navigator
const Stack = createNativeStackNavigator();

// Main Navigator component
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

// exporting the MainNavigator component
export default MainNavigator