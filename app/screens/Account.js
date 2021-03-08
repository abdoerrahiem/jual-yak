import React from 'react'
import {View, StyleSheet, FlatList} from 'react-native'
import Icon from '../components/Icon'
import ListItem from '../components/ListItem'
import ListItemSeparator from '../components/ListItemSeparator'
import Screen from '../components/Screen'
import colors from '../utils/colors'

const menuItems = [
  {
    id: 1,
    title: 'List Produk',
    icon: {name: 'format-list-bulleted', backgroundColor: colors.tertiary},
  },
  {
    id: 3,
    title: 'Pesan Masuk',
    icon: {name: 'email', backgroundColor: colors.secondary},
  },
]

const Account = () => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Abdur Rahim"
          subtitle="abdoerrahiem@gmail.com"
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
            />
          )}
          ItemSeparatorComponent={() => <ListItemSeparator />}
        />
      </View>
      <ListItem
        title="Keluar"
        IconComponent={<Icon name="logout" backgroundColor={colors.primary} />}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {},
})

export default Account
