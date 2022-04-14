import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {UseMovies} from '../hooks/UseMovies';
import CardMovie from '../components/CardMovie';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import SliderCard from '../components/SliderCard';
import BgGradiendt from '../components/BgGradiendt';
import ImageColors from 'react-native-image-colors';
import {getPosterColors} from '../helpers/getPosterColors';
import {GradientContext} from '../context/GradientContext';

const {width: windowWhidth} = Dimensions.get('window');
const HomeScreen = () => {
  const {
    nowPlaying: peliculasEnCine,
    popular: peliculasPopulares,
    topRated,
    upComing,
    isLoading,
  } = UseMovies();

  const {top} = useSafeAreaInsets();

  const {setMainColors} = useContext(GradientContext);

  const getPosterColorsImage = async (index: number) => {
    const {poster_path} = peliculasEnCine[index];
    const uri = `https://image.tmdb.org/t/p/w500/${poster_path}`;

    const {primary = 'red', secondary = 'orange'} = await getPosterColors(uri);
    setMainColors({primary, secondary});
  };

  useEffect(() => {
    if (peliculasEnCine.length > 0) {
      getPosterColorsImage(0);
    }
  }, [peliculasEnCine]);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color={'Black'} size={100} />
      </View>
    );
  }
  return (
    <BgGradiendt>
      <ScrollView>
        <View style={{flex: 1, marginTop: 25}}>
          <View style={{height: 440}}>
            <Carousel
              data={peliculasEnCine!}
              renderItem={({item}) => <CardMovie movie={item} />}
              sliderWidth={windowWhidth}
              itemWidth={300}
              onSnapToItem={index => getPosterColorsImage(index)}
            />
          </View>

          <SliderCard movies={peliculasPopulares!} title="Populares" />

          <SliderCard movies={topRated!} title="Mejor calificadas" />
          <SliderCard movies={upComing!} title="Proximamente" />
        </View>
      </ScrollView>
    </BgGradiendt>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
