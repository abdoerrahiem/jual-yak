import React from 'react'
import {StatusBar} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {Provider} from 'react-redux'

import AuthNavigator from './navigations/AuthNavigator'
import AppNavigator from './navigations/AppNavigator'
import store from './store'
import theme from './utils/theme'
import Offline from './components/Offline'

const App = () => {
  const {
    auth: {user},
  } = store.getState()

  return (
    <>
      <StatusBar barStyle="light-content" />
      <Offline />
      <Provider store={store}>
        <NavigationContainer theme={theme}>
          {user ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </Provider>
    </>
  )
}

export default App
