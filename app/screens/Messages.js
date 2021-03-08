import React, {useState} from 'react'
import {FlatList, StyleSheet} from 'react-native'
import ListItem from '../components/ListItem'
import ListItemSeparator from '../components/ListItemSeparator'
import ListItemDeleteAction from '../components/ListItemDeleteAction'
import Screen from '../components/Screen'

const initialMessages = [
  {
    id: 1,
    title: 'Message 1',
    description: 'This is message',
    image: require('../assets/img/abdoerrahiem.jpg'),
  },
  {
    id: 2,
    title: 'Message 2',
    description: 'This is message',
    image: require('../assets/img/abdoerrahiem.jpg'),
  },
  {
    id: 3,
    title: 'Message 3',
    description: 'This is message',
    image: require('../assets/img/abdoerrahiem.jpg'),
  },
]

const Messages = () => {
  const [messages, setMessages] = useState(initialMessages)
  const [refreshing, setRefreshing] = useState(false)

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id))
  }

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({item}) => (
          <ListItem
            key={item.id}
            title={item.title}
            subtitle={item.description}
            image={item.image}
            onPress={() => console.log('Message selected', item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeparator />}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 1,
              title: 'Message 1',
              description: 'This is message',
              image: require('../assets/img/abdoerrahiem.jpg'),
            },
          ])
        }}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({})

export default Messages
