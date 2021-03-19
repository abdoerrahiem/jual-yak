import React from 'react'
import {SafeAreaView, StyleSheet, View} from 'react-native'
import Constants from 'expo-constants'
import colors from '../utils/colors'

const Screen = ({children, style}) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={styles.view}>{children}</View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: colors.light,
    paddingVertical: 15,
  },
  view: {
    flex: 1,
  },
})

export default Screen
