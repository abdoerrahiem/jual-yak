import React from 'react'
import {View, TextInput, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../utils/colors'

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 50,
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 20,
    marginVertical: 10,
    alignItems: 'center',
  },
  textInput: {
    fontSize: 18,
    fontFamily: 'Quicksand-Light',
    color: colors.dark,
    width: '100%',
  },
  icon: {
    marginRight: 10,
  },
})

const Input = ({icon, width = '100%', ...otherProps}) => {
  return (
    <View style={[styles.container, {width}]}>
      {icon && (
        <Icon name={icon} size={24} color={colors.medium} style={styles.icon} />
      )}
      <TextInput
        placeholderTextColor={colors.medium}
        style={styles.textInput}
        {...otherProps}
      />
    </View>
  )
}

export default Input
