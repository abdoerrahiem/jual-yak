import React, {useState} from 'react'
import {StyleSheet, FlatList} from 'react-native'
import Card from '../components/Card'
import Screen from '../components/Screen'
import colors from '../utils/colors'

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

const Products = () => {
  const [products, setProducts] = useState(initialProducts)

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={products}
        keyExtractor={(product) => product.id.toString()}
        renderItem={({item}) => (
          <Card title={item.title} price={item.price} image={item.image} />
        )}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
})

export default Products
