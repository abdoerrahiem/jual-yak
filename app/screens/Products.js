import React, {useState} from 'react'
import {StyleSheet, FlatList} from 'react-native'
import Card from '../components/Card'
import Screen from '../components/Screen'
import colors from '../utils/colors'
import routes from '../utils/routes'

const initialProducts = [
  {
    id: 1,
    title: 'Red jacket for sale',
    price: '100000',
    image: require('../assets/img/jacket.jpg'),
  },
  {
    id: 2,
    title: 'Couch in great condition',
    price: '200000',
    image: require('../assets/img/chair.jpg'),
  },
]

const Products = ({navigation}) => {
  const [products, setProducts] = useState(initialProducts)

  const {navigate} = navigation

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={products}
        keyExtractor={(product) => product.id.toString()}
        renderItem={({item}) => (
          <Card
            title={item.title}
            price={item.price}
            image={item.image}
            onPress={() => navigate(routes.PRODUCT, {item})}
          />
        )}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 20,
    backgroundColor: colors.light,
  },
})

export default Products
