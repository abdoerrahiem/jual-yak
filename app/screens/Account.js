import React from 'react'
import {View, StyleSheet, FlatList} from 'react-native'
import {useSelector, useDispatch} from 'react-redux'

import Icon from '../components/Icon'
import ListItem from '../components/ListItem'
import ListItemSeparator from '../components/ListItemSeparator'
import Screen from '../components/Screen'
import colors from '../utils/colors'
import {logout} from '../store/actions/authActions'

const menuItems = [
  {
    id: 1,
    title: 'List Produk',
    icon: {name: 'format-list-bulleted', backgroundColor: colors.tertiary},
    targetScreen: 'MyProducts',
  },
  {
    id: 2,
    title: 'Pesan Masuk',
    icon: {name: 'email', backgroundColor: colors.secondary},
    targetScreen: 'Messages',
  },
]

const Account = ({navigation}) => {
  const {navigate} = navigation

  const dispatch = useDispatch()
  const {user} = useSelector((state) => state.currentUser)

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={user.name}
          subtitle={user.email}
          image={require('../assets/img/abdoerrahiem.jpg')}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.id.toString()}
          renderItem={({item}) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigate(item.targetScreen)}
            />
          )}
          ItemSeparatorComponent={() => <ListItemSeparator />}
        />
      </View>
      <ListItem
        title="Keluar"
        IconComponent={<Icon name="logout" backgroundColor={colors.primary} />}
        onPress={() => dispatch(logout())}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  screen: {
    // backgroundColor: 'red',
  },
})

export default Account
