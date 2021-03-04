import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import DefaultText from './DefaultText'
import colors from '../utils/colors'
import convert from '../utils/convert'

const Card = ({title, price, image}) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <DefaultText style={styles.title}>{title}</DefaultText>
        <DefaultText style={styles.price} bold>
          Rp. {convert(price)}
        </DefaultText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 3,
  },
  price: {
    color: colors.secondary,
    fontSize: 18,
  },
})

export default Card
