import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Movie } from '../interfaces/movieInterface'
import CardMovie from './CardMovie'

interface SliderCardProps{
    movies:Movie[],
    title:string
}
const SliderCard = ({movies,title}:SliderCardProps) => {
  return (
    <View style={{height: 260}}>
    <Text style={{fontSize: 30, fontWeight: 'bold',marginLeft:19}}>{title}</Text>
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={movies}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <CardMovie movie={item} height={200} width={140} />
      )}
    />
  </View>
  )
}

export default SliderCard

const styles = StyleSheet.create({})