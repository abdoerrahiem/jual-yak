import React from 'react'
import {ImageBackground, StyleSheet, View, Text, Image} from 'react-native'
import Button from '../components/Button'
import DefaultText from '../components/DefaultText'
import colors from '../utils/colors'

const Home = () => {
  return (
    <ImageBackground
      blurRadius={3}
      style={styles.background}
      source={require('../assets/img/background.jpg')}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/img/logo.png')} />
        <DefaultText style={styles.tagline}>
          Jual Barang Bekasmu disini!
        </DefaultText>
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="Login" />
        <Button title="Register" secondary />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#ffbe0f',
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 100,
    alignItems: 'center',
  },
  buttonsContainer: {
    padding: 20,
    width: '100%',
  },
  tagline: {
    fontSize: 20,
    padding: 20,
    color: colors.white,
    fontFamily: 'Quicksand-SemiBold',
  },
})

export default Home
