import React from 'react'
import {View, StyleSheet} from 'react-native'
import Constants from 'expo-constants'
import {useNetInfo} from '@react-native-community/netinfo'

import colors from '../utils/colors'
import DefaultText from './DefaultText'

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 40,
    position: 'relative',
    // top: Constants.statusBarHeight,
    zIndex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.white,
  },
})

const Offline = () => {
  const netInfo = useNetInfo()

  if (netInfo.type !== 'unknown' && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <DefaultText style={styles.text}>
          Tidak ada jaringan internet!
        </DefaultText>
      </View>
    )

  return null
}

export default Offline
