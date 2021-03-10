import React from 'react'
import {TouchableOpacity, StyleSheet} from 'react-native'
import DefaultText from './DefaultText'

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
})

const PickerItem = ({item, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <DefaultText style={styles.text}>{item.label}</DefaultText>
    </TouchableOpacity>
  )
}

export default PickerItem
