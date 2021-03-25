import React, {useEffect, useState} from 'react'
import {StatusBar} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {Provider} from 'react-redux'
import SplashScreen from 'react-native-splash-screen'

import AuthNavigator from './navigations/AuthNavigator'
import AppNavigator from './navigations/AppNavigator'
import store from './store'
import theme from './utils/theme'
import Offline from './components/Offline'
import {getCurrentUser} from './store/actions/authActions'

const App = () => {
  const [user, setUser] = useState()

  useEffect(() => {
    store.dispatch(getCurrentUser())
  }, [])

  useEffect(() => {
    const unsubscribe = store.subscribe(() =>
      setUser(store.getState().currentUser.user),
    )

    return () => unsubscribe()
  }, [])

  useEffect(() => {
    SplashScreen.hide()
  }, [])

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
