import React from 'react'
import {View, Text} from 'react-native'
import Card from '../components/Card'
import colors from '../utils/colors'

const Test = () => {
  return (
    <View
      style={{
        backgroundColor: colors.screen,
        padding: 20,
        paddingTop: 100,
      }}>
      <Card
        title="Red jacket for sale"
        price="50000"
        image={require('../assets/img/jacket.jpg')}
      />
    </View>
  )
}

export default Test
