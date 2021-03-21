import React from 'react'
import LottieView from 'lottie-react-native'

const Loader = () => {
  return (
    <LottieView
      source={require('../assets/animations/loader.json')}
      autoPlay
      loop
    />
  )
}

export default Loader
