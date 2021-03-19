import React from 'react'
import {View, Image, StyleSheet, TouchableHighlight} from 'react-native'
import DefaultText from '../components/DefaultText'
import ListItem from '../components/ListItem'
import colors from '../utils/colors'
import convert from '../utils/convert'
import routes from '../utils/routes'

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

const Product = ({route, navigation}) => {
  const {item} = route.params
  const {navigate} = navigation

  return (
    <>
      <TouchableHighlight
        underlayColor={colors.light}
        onPress={() => navigate(routes.IMAGE_VIEW)}>
        <Image style={styles.image} source={item.image} />
      </TouchableHighlight>
      <View style={styles.detailsContainer}>
        <DefaultText style={styles.title}>{item.title}</DefaultText>
        <DefaultText style={styles.price} bold>
          Rp. {convert(item.price)}
        </DefaultText>
        <View style={styles.userContainer}>
          <ListItem
            image={require('../assets/img/abdoerrahiem.jpg')}
            title="Abdur Rahim"
            subtitle="10 produk"
          />
        </View>
      </View>
    </>
  )
}

export default Product
