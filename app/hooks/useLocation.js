import {useEffect, useState} from 'react'
import RNLocation from 'react-native-location'

const useLocation = () => {
  const [location, setLocation] = useState()

  useEffect(() => {
    RNLocation.configure({
      distanceFilter: 5.0,
    })

    RNLocation.requestPermission({
      ios: 'whenInUse',
      android: {
        detail: 'coarse',
      },
    }).then((granted) => {
      if (granted) {
        RNLocation.subscribeToLocationUpdates((locations) =>
          setLocation({
            latitude: locations[0].latitude,
            longitude: locations[0].longitude,
          }),
        )
      }
    })
  }, [])

  return location
}

export default useLocation
