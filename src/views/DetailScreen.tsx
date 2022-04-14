import {
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/Navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import UseMovieDetails from '../hooks/UseMovieDetails';
import MovieDetails from '../components/MovieDetails';

const screenHight = Dimensions.get('screen').height;
interface DetailScreenProps
  extends NativeStackScreenProps<RootStackParamList, 'DetailMovie'> {}

const DetailScreen = ({route, navigation}: DetailScreenProps) => {
  const movie = route.params;

  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  const {isLoading, cast, movieFull} = UseMovieDetails(movie.id);

  console.log({isLoading, cast, movieFull});
  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image
          resizeMode="contain"
          source={{uri: uri}}
          style={styles.posterImage}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.pop()}
        style={styles.backButtom}>
        <Icon color="white" name="arrow-back-outline" size={70} />
      </TouchableOpacity>

      <View style={styles.marginContainer}>
        <Text style={styles.subtitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>

      <View>
        {isLoading ? (
          <ActivityIndicator size={35} color="grey" style={{marginTop: 20}} />
        ) : (
          <MovieDetails movieFull={movieFull!} cast={cast} />
        )}
      </View>
    </ScrollView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: screenHight * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
  },
  posterImage: {
    flex: 1,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subtitle: {fontSize: 16, opacity: 0.8},
  title: {fontSize: 20, fontWeight: 'bold'},
  backButtom: {
    position: 'absolute',
    zIndex: 2,
    elevation: 3,
    left: 5,
  },
});
