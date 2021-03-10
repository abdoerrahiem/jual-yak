import React from 'react'
import {Text, StyleSheet} from 'react-native'
import colors from '../utils/colors'

const DefaultText = ({children, bold, style, ...otherProps}) => (
  <Text
    style={[
      styles.text,
      {fontFamily: bold ? 'Quicksand-Bold' : 'Quicksand-Medium'},
      style,
    ]}
    {...otherProps}>
    {children}
  </Text>
)

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: colors.black,
  },
})

export default DefaultText
