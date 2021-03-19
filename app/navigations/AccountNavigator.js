import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import Account from '../screens/Account'
import Messages from '../screens/Messages'

const Stack = createStackNavigator()

const AccountNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Account" component={Account} />
    <Stack.Screen name="Messages" component={Messages} />
  </Stack.Navigator>
)

export default AccountNavigator
