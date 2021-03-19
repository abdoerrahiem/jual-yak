import React from 'react'
import {ImageBackground, StyleSheet, View, Image} from 'react-native'
import Button from '../components/Button'
import DefaultText from '../components/DefaultText'
import colors from '../utils/colors'
import routes from '../utils/routes'

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

const Welcome = ({navigation}) => {
  const {navigate} = navigation

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
        <Button title="Masuk" onPress={() => navigate(routes.LOGIN)} />
        <Button
          title="Daftar"
          secondary
          onPress={() => navigate(routes.REGISTER)}
        />
      </View>
    </ImageBackground>
  )
}

export default Welcome
