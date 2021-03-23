import React from 'react'
import {View, StyleSheet, TouchableHighlight, Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Image from 'react-native-fast-image'

import colors from '../utils/colors'
import routes from '../utils/routes'

const {height, width} = Dimensions.get('screen')

const styles = StyleSheet.create({
  image: {
    width,
    height: 250,
    top: height / 6,
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

const ImageView = ({navigation, route}) => {
  const {navigate} = navigation
  const {uri} = route.params

  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <TouchableHighlight
          underlayColor={colors.dark}
          style={styles.closeIcon}
          onPress={() => navigate(routes.PRODUCT)}>
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
        tintColor="light"
        source={{
          uri,
          priority: Image.priority.normal,
        }}
      />
    </View>
  )
}

export default ImageView
