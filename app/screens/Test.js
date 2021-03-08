import React from 'react'
import {View, Text} from 'react-native'
import Card from '../components/Card'
import Screen from '../components/Screen'
import Icon from '../components/Icon'
import colors from '../utils/colors'
import ListItem from '../components/ListItem'

const Test = () => {
  return (
    <Screen>
      <ListItem
        title="My Title"
        // subtitle="My subtitle"
        ImageComponent={<Icon name="email" />}
      />
    </Screen>
  )
}

export default Test
