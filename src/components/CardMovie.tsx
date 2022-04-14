import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Movie} from '../interfaces/movieInterface';
import {useNavigation} from '@react-navigation/native';

import {RootStackParamList} from '../navigation/Navigation';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

type CardMovieScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

interface CardMovieProps {
  movie: Movie;
  height?: number;
  width?: number;
}

const CardMovie = ({movie, height = 420, width = 300}: CardMovieProps) => {
  const {title, poster_path} = movie;
  const uri = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  const navigation = useNavigation<CardMovieScreenProp>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailMovie', movie)}
      style={{height, width, marginHorizontal: 2,paddingHorizontal:7,paddingBottom:20}}>
      <View style={styles.containerImage}>
        <Image
          style={styles.image}
          resizeMode={'contain'}
          source={{uri: uri}}
        />
      </View>
    </TouchableOpacity>
  );
};

export default CardMovie;

const styles = StyleSheet.create({
  containerImage: {
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 10,
    borderRadius: 18,
  },
  image: {
    flex: 1,
    borderRadius: 18,
  },
});
