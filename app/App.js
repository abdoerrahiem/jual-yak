import React from 'react'
import {StatusBar} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {Provider} from 'react-redux'

import AuthNavigator from './navigations/AuthNavigator'
import AppNavigator from './navigations/AppNavigator'
import store from './store'
import theme from './utils/theme'

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Provider store={store}>
        <NavigationContainer theme={theme}>
          <AppNavigator />
        </NavigationContainer>
      </Provider>
    </>
  )
}

export default App
