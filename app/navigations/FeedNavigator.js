import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import Products from '../screens/Products'
import Product from '../screens/Product'
import ImageView from '../screens/ImageView'

const Stack = createStackNavigator()

const FeedNavigator = () => (
  <Stack.Navigator
    mode="modal"
    screenOptions={{headerShown: false, gestureEnabled: true}}>
    <Stack.Screen name="Products" component={Products} />
    <Stack.Screen name="Product" component={Product} />
    <Stack.Screen name="ImageView" component={ImageView} />
  </Stack.Navigator>
)

export default FeedNavigator
