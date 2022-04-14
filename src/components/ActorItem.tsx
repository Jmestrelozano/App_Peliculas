import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Cast} from '../interfaces/creditsInterface';

interface ActorItemProps {
  cast: Cast;
}

const ActorItem = ({cast}: ActorItemProps) => {
  const {name, character, profile_path} = cast;
  const uri = `https://image.tmdb.org/t/p/w500/${profile_path}`;
  return (
    <View style={styles.container}>
      {profile_path && (
        <Image
          style={{width: 50, height: 50, borderRadius: 10}}
          source={{uri: uri}}
        />
      )}

      <View style={styles.actorInfo}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>{name}</Text>
        <Text numberOfLines={3} style={{fontSize: 16, opacity: 0.7}}>{character}</Text>
      </View>
    </View>
  );
};

export default ActorItem;

const styles = StyleSheet.create({
  container: {
    paddingRight: 15,
    marginRight: 30,
    marginLeft:20,
    height: 50,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  actorInfo: {
    marginLeft: 10,
    marginTop: 4,
  },
});
