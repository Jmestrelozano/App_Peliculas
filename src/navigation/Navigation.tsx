// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../views/HomeScreen';
import DetailScreen from '../views/DetailScreen';
import { Movie } from '../interfaces/movieInterface';

export type RootStackParamList = {
  Home: undefined;
  DetailMovie: Movie
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation=()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false,gestureEnabled:false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DetailMovie" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;