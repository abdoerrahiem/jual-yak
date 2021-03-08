import React from 'react'
import {View, StyleSheet, Image, TouchableHighlight} from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import colors from '../utils/colors'
import DefaultText from './DefaultText'

const ListItem = ({
  image,
  IconComponent,
  title,
  subtitle,
  onPress,
  renderRightActions,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image source={image} style={styles.image} />}
          <View style={styles.detailsContainer}>
            <DefaultText style={styles.title} bold>
              {title}
            </DefaultText>
            {subtitle && (
              <DefaultText style={styles.subtitle}>{subtitle}</DefaultText>
            )}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 70,
  },
  title: {},
  subtitle: {
    color: colors.medium,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: 'center',
  },
})

export default ListItem
