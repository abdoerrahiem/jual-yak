import React from 'react'
import {View, StyleSheet} from 'react-native'
import LottieView from 'lottie-react-native'
import colors from '../utils/colors'

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.white,
    opacity: 0.8,
    position: 'absolute',
    zIndex: 1,
  },
})

const Loader = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/animations/loader.json')}
        autoPlay
        loop
      />
    </View>
  )
}

export default Loader
