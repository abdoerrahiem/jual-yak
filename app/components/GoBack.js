import React, {useEffect} from 'react'
import {
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native'
import Constants from 'expo-constants'
import {useNavigation} from '@react-navigation/native'
import Icon from 'react-native-vector-icons/AntDesign'
import colors from '../utils/colors'

const styles = StyleSheet.create({
  container: {
    // position: 'absolute',
    // top: 10,
    // left: 10,
    // elevation: 5,
  },
  //   goBack: {
  //     backgroundColor: colors.white,
  //     borderRadius: 25,
  //     height: 50,
  //     width: 50,
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //   },
})

const GoBack = () => {
  const {goBack} = useNavigation()

  return (
    <TouchableOpacity
      style={styles.container}
      //   underlayColor={colors.light}
      onPress={() => goBack()}>
      <Icon name="arrowleft" size={30} color={colors.primary} />
    </TouchableOpacity>
  )
}

export default GoBack
