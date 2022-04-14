import {Animated, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {GradientContext} from '../context/GradientContext';
import { UseFade } from '../hooks/UseFade';

interface BgGradiendtProps {
  children: JSX.Element | JSX.Element[];
}
const BgGradiendt = ({children}: BgGradiendtProps) => {
  const {
    colors: {primary, secondary},
    prevColors: {primary: prevPrimary, secondary: prevSecondary},
    setMainPrevColors
  } = useContext(GradientContext);

  const {opacity,fadeIn,fadeOut } =UseFade()
  useEffect(()=>{
    fadeIn(()=>{
        setMainPrevColors({primary,secondary})
        fadeOut()
    })
  },[primary,secondary])
  return (
    <LinearGradient
      colors={[prevPrimary, prevSecondary, 'white']}
      style={{...StyleSheet.absoluteFillObject}}
      start={{x: 0.1, y: 0.1}}
      end={{x: 0.5, y: 0.7}}>
      <Animated.View style={{...StyleSheet.absoluteFillObject,opacity}}>
        <LinearGradient
          colors={[primary, secondary, 'white']}
          style={{...StyleSheet.absoluteFillObject}}
          start={{x: 0.1, y: 0.1}}
          end={{x: 0.5, y: 0.7}}
        />
      </Animated.View>
      {children}
    </LinearGradient>
  );
};

export default BgGradiendt;

const styles = StyleSheet.create({});
