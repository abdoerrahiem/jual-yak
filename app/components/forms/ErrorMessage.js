import React from 'react'
import {StyleSheet} from 'react-native'
import DefaultText from '../DefaultText'

const styles = StyleSheet.create({
  error: {
    color: 'red',
  },
})

const ErrorMessage = ({error}) => {
  return <DefaultText style={styles.error}>{error}</DefaultText>
}

export default ErrorMessage
