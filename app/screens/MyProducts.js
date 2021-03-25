import React, {useEffect} from 'react'
import {StyleSheet, FlatList} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'

import Button from '../components/Button'
import Card from '../components/Card'
import Screen from '../components/Screen'
import DefaultText from '../components/DefaultText'
import colors from '../utils/colors'
import routes from '../utils/routes'
import Loader from '../components/Loader'
import {getCurrentUserProducts} from '../store/actions/productActions'

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 20,
    backgroundColor: colors.light,
  },
})

const MyProducts = ({navigation}) => {
  const {navigate} = navigation

  const dispatch = useDispatch()
  const {loading, error, products} = useSelector((state) => state.myProducts)

  useEffect(() => {
    dispatch(getCurrentUserProducts())
  }, [])

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <DefaultText>{error}</DefaultText>
          <Button title="Coba Lagi" onPress={() => dispatch(getProducts())} />
        </>
      )}
      {loading && <Loader />}
      <FlatList
        data={products}
        keyExtractor={(product) => product.id.toString()}
        renderItem={({item}) => (
          <Card
            title={item.title}
            price={item.price}
            uri={item.images[0].url}
            onPress={() => navigate(routes.PRODUCT, {item})}
          />
        )}
      />
    </Screen>
  )
}

export default MyProducts
