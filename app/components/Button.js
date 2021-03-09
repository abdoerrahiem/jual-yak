import React from 'react'
import {TouchableOpacity, StyleSheet} from 'react-native'
import colors from '../utils/colors'
import DefaultText from './DefaultText'

const Button = ({title, secondary, onPress}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {backgroundColor: secondary ? colors.secondary : colors.primary},
      ]}
      onPress={onPress}>
      <DefaultText style={styles.text}>{title}</DefaultText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '100%',
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: 'uppercase',
    fontFamily: 'Quicksand-Bold',
    letterSpacing: 1,
  },
})

export default Button
