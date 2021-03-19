import React from 'react'
import {View, Image, StyleSheet, TouchableHighlight} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import colors from '../utils/colors'

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    top: -20,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  closeIcon: {
    backgroundColor: colors.secondary,
    padding: 10,
    borderRadius: 30,
  },
  deleteIcon: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 30,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 20,
  },
})

const ImageView = ({navigation}) => {
  const {goBack} = navigation

  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <TouchableHighlight
          underlayColor={colors.dark}
          style={styles.closeIcon}
          onPress={() => goBack()}>
          <Icon name="close" color="white" size={30} />
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={colors.dark}
          style={styles.deleteIcon}
          onPress={() => console.log('delete')}>
          <Icon name="trash-can-outline" color="white" size={30} />
        </TouchableHighlight>
      </View>
      <Image
        style={styles.image}
        source={require('../assets/img/chair.jpg')}
        resizeMode="contain"
      />
    </View>
  )
}

export default ImageView
