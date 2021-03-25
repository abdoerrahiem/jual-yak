import React, {useEffect} from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import * as Notifications from 'expo-notifications'
import Constants from 'expo-constants'

import ProductEdit from '../screens/ProductEdit'
import FeedNavigator from './FeedNavigator'
import AccountNavigator from './AccountNavigator'
import NewProductButton from '../components/NewProductButton'
import DefaultText from '../components/DefaultText'
import routes from '../utils/routes'

const Tab = createBottomTabNavigator()

const AppNavigator = () => {
  const registerForPushNotificationsAsync = async () => {
    let token
    if (Constants.isDevice) {
      const {status: existingStatus} = await Notifications.getPermissionsAsync()
      let finalStatus = existingStatus
      if (existingStatus !== 'granted') {
        const {status} = await Notifications.requestPermissionsAsync()
        finalStatus = status
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!')
        return
      }
      token = (await Notifications.getExpoPushTokenAsync()).data
      console.log(token)
    } else {
      alert('Must use physical device for Push Notifications')
    }

    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      })
    }

    return token
  }

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => console(token))
  }, [])

  return (
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
}

export default AppNavigator
