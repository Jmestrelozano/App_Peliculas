import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MovieFull} from '../interfaces/movieInterface';
import {Cast} from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import currencies from 'currency-formatter';
import ActorItem from './ActorItem';
interface MovieDetailsProps {
  movieFull: MovieFull;
  cast: Cast[];
}

const MovieDetails = ({movieFull, cast}: MovieDetailsProps) => {
  const {vote_average, genres, overview, budget} = movieFull;
  return (
    <>
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name="star-outline" color="grey" size={28} />
          <Text>{vote_average}</Text>

          <Text>{genres.map(g => g.name).join(', ')}</Text>
        </View>

        <Text style={{fontSize: 23, marginTop: 18, fontWeight: 'bold'}}>
          Historia
        </Text>
        <Text
          style={{
            fontSize: 16,
          }}>
          {overview}
        </Text>

        <Text style={{fontSize: 23, marginTop: 18, fontWeight: 'bold'}}>
          Presupuesto
        </Text>
        <Text
          style={{
            fontSize: 18,
          }}>
          {currencies.format(budget, {code: 'COP'})}
        </Text>
      </View>

      <View style={{marginTop: 10, marginBottom: 100}}>
        <Text
          style={{
            fontSize: 23,
            marginTop: 18,
            fontWeight: 'bold',
            marginHorizontal: 20,
            marginBottom: 10,
          }}>
          Actores
        </Text>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{marginTop:10}}
          data={cast}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => {
            return <ActorItem cast={item} />;
          }}
        />
      </View>
    </>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({});
