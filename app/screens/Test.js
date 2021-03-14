import React, {useState} from 'react'

import {launchCamera, launchImageLibrary} from 'react-native-image-picker'
import Screen from '../components/Screen'
import Input from '../components/Input'
import Picker from '../components/Picker'
import Button from '../components/Button'
import ImageInput from '../components/ImageInput'
import ImageInputList from '../components/ImageInputList'

const categories = [
  {label: 'Furniture', value: 1},
  {label: 'Clothing', value: 2},
  {label: 'Cameras', value: 3},
]

const Test = () => {
  const [imageUris, setImageUris] = useState([])

  const handleAdd = (uri) => setImageUris([...imageUris, uri])

  const handleRemove = (uri) =>
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri))

  return (
    <Screen>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
    </Screen>
  )
}

export default Test
