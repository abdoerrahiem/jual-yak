import React from 'react'
import {View, Image, StyleSheet} from 'react-native'
import DefaultText from '../components/DefaultText'
import ListItem from '../components/ListItem'
import colors from '../utils/colors'
import convert from '../utils/convert'

const Product = () => {
  return (
    <View>
      <Image
        style={styles.image}
        source={require('../assets/img/jacket.jpg')}
      />
      <View style={styles.detailsContainer}>
        <DefaultText style={styles.title}>Red jacket for sale</DefaultText>
        <DefaultText style={styles.price} bold>
          Rp. {convert(50000)}
        </DefaultText>
        <View style={styles.userContainer}>
          <ListItem
            image={require('../assets/img/abdoerrahiem.jpg')}
            name="Abdur Rahim"
            productCount={10}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginVertical: 10,
  },
  price: {
    color: colors.secondary,
    fontSize: 20,
  },
  userContainer: {
    marginVertical: 40,
  },
})

export default Product
