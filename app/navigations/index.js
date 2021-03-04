import React from 'react'
import {StyleSheet} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import DefaultText from '../components/DefaultText'
import colors from '../utils/colors'
import Home from '../screens/Home'
import ImageView from '../screens/ImageView'
import Product from '../screens/Product'
import Test from '../screens/Test'

const Stack = createStackNavigator()

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ImageView"
        screenOptions={{
          animationEnabled: false,
          headerShown: false,
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: <DefaultText style={styles.title}>Home</DefaultText>,
          }}
        />
        <Stack.Screen name="ImageView" component={ImageView} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="Test" component={Test} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  title: {
    color: colors.black,
    fontSize: 20,
    fontFamily: 'Quicksand-Bold',
  },
})
