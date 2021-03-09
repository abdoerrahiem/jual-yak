import React, {useState} from 'react'
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../utils/colors'
import DefaultText from './DefaultText'
import Screen from './Screen'
import PickerItem from './PickerItem'

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 50,
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 10,
    alignItems: 'center',
  },
  text: {
    flex: 1,
    fontSize: 18,
    fontFamily: 'Quicksand-Light',
    color: colors.dark,
    width: '100%',
  },
  placeholder: {
    flex: 1,
    fontSize: 18,
    fontFamily: 'Quicksand-Light',
    color: colors.medium,
    width: '100%',
  },
  icon: {
    marginRight: 10,
  },
})

const Picker = ({icon, placeholder, items, selectedItem, onSelectItem}) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setShowModal(true)}>
        <View style={styles.container}>
          {icon && (
            <Icon
              name={icon}
              size={24}
              color={colors.medium}
              style={styles.icon}
            />
          )}
          {selectedItem ? (
            <DefaultText style={styles.text}>{selectedItem.label}</DefaultText>
          ) : (
            <DefaultText style={styles.placeholder}>{placeholder}</DefaultText>
          )}
          <Icon name="chevron-down" size={24} color={colors.medium} />
        </View>
      </TouchableWithoutFeedback>
      <Modal animationType="slide" visible={showModal}>
        <Screen>
          <Button title="Close" onPress={() => setShowModal(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({item}) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setShowModal(false)
                  onSelectItem(item)
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  )
}

export default Picker
