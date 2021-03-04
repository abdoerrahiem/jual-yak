import React from 'react'
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import colors from '../utils/colors'

const ImageView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.closeIcon}>
          <Icon name="close" color="white" size={30} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteIcon}>
          <Icon name="trash-can-outline" color="white" size={30} />
        </TouchableOpacity>
      </View>
      <Image
        style={styles.image}
        source={require('../assets/img/chair.jpg')}
        resizeMode="contain"
      />
    </View>
  )
}

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

export default ImageView

// section 4 ends
