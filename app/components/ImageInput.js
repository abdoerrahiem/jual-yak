import React from 'react'
import {
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native'
import {launchImageLibrary} from 'react-native-image-picker'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../utils/colors'

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 100,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
})

const ImageInput = ({uri, onChangeImage}) => {
  const handlePress = async () => {
    if (!uri) {
      launchImageLibrary({mediaType: 'photo', quality: 0.5}, (data) => {
        if (!data.didCancel) onChangeImage(data.uri)
      })
    } else {
      Alert.alert('Hapus Gambar', 'Kamu yakin ingin menghapus gambar ini?', [
        {text: 'Ya', onPress: () => onChangeImage(null)},
        {text: 'Tidak'},
      ])
    }
  }

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {uri ? (
          <Image source={{uri}} style={styles.image} />
        ) : (
          <Icon name="camera" color={colors.medium} size={40} />
        )}
      </View>
    </TouchableWithoutFeedback>
  )
}

export default ImageInput
