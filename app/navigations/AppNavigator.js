import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import ProductEdit from '../screens/ProductEdit'
import FeedNavigator from './FeedNavigator'
import AccountNavigator from './AccountNavigator'
import NewProductButton from '../components/NewProductButton'
import DefaultText from '../components/DefaultText'
import routes from '../utils/routes'

const Tab = createBottomTabNavigator()

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Feed"
      component={FeedNavigator}
      options={{
        tabBarIcon: ({color, size}) => (
          <Icon name="home" color={color} size={size} />
        ),
        tabBarLabel: ({color}) => (
          <DefaultText style={{color}}>Beranda</DefaultText>
        ),
      }}
    />
    <Tab.Screen
      name="ProductEdit"
      component={ProductEdit}
      options={({navigation}) => ({
        tabBarButton: () => (
          <NewProductButton
            onPress={() => navigation.navigate(routes.PRODUCT_EDIT)}
          />
        ),
        tabBarIcon: ({color, size}) => (
          <Icon name="plus-circle" color={color} size={size} />
        ),
      })}
    />
    <Tab.Screen
      name="Account"
      component={AccountNavigator}
      options={{
        tabBarIcon: ({color, size}) => (
          <Icon name="account" color={color} size={size} />
        ),
        tabBarLabel: ({color}) => (
          <DefaultText style={{color}}>Akun</DefaultText>
        ),
      }}
    />
  </Tab.Navigator>
)

export default AppNavigator
