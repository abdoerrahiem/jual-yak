import React from 'react'
import {View, StyleSheet, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../utils/colors'

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderRadius: 40,
    borderColor: colors.light,
    borderWidth: 10,
    height: 80,
    width: 80,
    bottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const NewProductButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Icon name="plus-circle" color={colors.white} size={30} />
      </View>
    </TouchableOpacity>
  )
}

export default NewProductButton
