import AsyncStorage from '@react-native-async-storage/async-storage'
import moment from 'moment'

const isExpired = (item) => {
  const now = moment(Date.now())
  const storedTime = moment(item.timestamp)
  return now.diff(storedTime, 'minutes') > 5
}

export const createStorage = async (key, value) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    }

    await AsyncStorage.setItem(key, JSON.stringify(item))
  } catch (error) {
    console.log(error)
  }
}

export const getStorage = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key)
    const item = JSON.parse(value)

    if (!item) return null

    if (isExpired(item)) {
      await AsyncStorage.removeItem(key)
      return null
    }

    return item.value
  } catch (error) {
    console.log(error)
  }
}

export const removeStorage = async (key) => {
  try {
    await AsyncStorage.removeItem(key)
  } catch (error) {
    console.log(error)
  }
}
