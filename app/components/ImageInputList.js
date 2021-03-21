import React, {useRef} from 'react'
import {View, StyleSheet, ScrollView} from 'react-native'
import ImageInput from './ImageInput'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  images: {
    flexDirection: 'row',
  },
  image: {
    marginRight: 10,
  },
})

const ImageInputList = ({imageUris = [], onRemoveImage, onAddImage}) => {
  const scrolllView = useRef()

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrolllView}
        onContentSizeChange={() => scrolllView.current.scrollToEnd()}
        horizontal
        showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
          {imageUris.map((uri) => (
            <View key={uri} style={styles.image}>
              <ImageInput uri={uri} onChangeImage={() => onRemoveImage(uri)} />
            </View>
          ))}
          <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  )
}

export default ImageInputList
