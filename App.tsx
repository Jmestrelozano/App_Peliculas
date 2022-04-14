import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Navigation from './src/navigation/Navigation';
import { GradientProvider } from './src/context/GradientContext';

const App = () => {
  return (
    <View style={{flex:1}}>
      <GradientProvider>
         <Navigation />
      </GradientProvider>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
