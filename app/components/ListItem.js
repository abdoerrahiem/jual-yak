import React from 'react'
import {View, StyleSheet, Image} from 'react-native'
import colors from '../utils/colors'
import DefaultText from './DefaultText'

const ListItem = ({image, name, productCount}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View>
        <DefaultText style={styles.name} bold>
          {name}
        </DefaultText>
        <DefaultText style={styles.productCount}>
          {productCount} Produk
        </DefaultText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 70,
    marginRight: 10,
  },
  name: {},
  productCount: {
    color: colors.medium,
  },
})

export default ListItem
