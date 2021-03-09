import React, {useState} from 'react'
import Screen from '../components/Screen'
import Input from '../components/Input'
import Picker from '../components/Picker'

const categories = [
  {label: 'Furniture', value: 1},
  {label: 'Clothing', value: 2},
  {label: 'Cameras', value: 3},
]

const Test = () => {
  const [category, setCategory] = useState(categories[0])

  return (
    <Screen>
      <Picker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        icon="apps"
        placeholder="Category"
        items={categories}
      />
      <Input icon="email" placeholder="Username" />
    </Screen>
  )
}

export default Test
