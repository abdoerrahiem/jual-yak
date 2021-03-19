import React from 'react'
import {StatusBar} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'

import AuthNavigator from './navigations/AuthNavigator'
import AppNavigator from './navigations/AppNavigator'
import theme from './utils/theme'

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer theme={theme}>
        <AppNavigator />
      </NavigationContainer>
    </>
  )
}

export default App
