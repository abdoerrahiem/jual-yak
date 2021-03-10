import React from 'react'
import {StyleSheet, TouchableOpacity} from 'react-native'
import DefaultText from './DefaultText'
import Icon from './Icon'

const styles = StyleSheet.create({
  container: {
    padding: 15,
    alignItems: 'center',
    width: '33%',
  },
  label: {
    marginTop: 5,
    textAlign: 'center',
  },
})

const CategoryPickerItem = ({item, onPress}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
      <DefaultText style={styles.label}>{item.label}</DefaultText>
    </TouchableOpacity>
  )
}

export default CategoryPickerItem
