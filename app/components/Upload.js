import React from 'react'
import {View, Modal, StyleSheet} from 'react-native'
import * as Progress from 'react-native-progress'
import LottieView from 'lottie-react-native'
import colors from '../utils/colors'
import DefaultText from './DefaultText'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.tertiary,
  },
  animation: {
    width: 150,
  },
})

const Upload = ({progress = 0, onDone}) => {
  return (
    <Modal>
      <View style={styles.container}>
        {progress < 100 ? (
          <>
            <Progress.Bar
              color={colors.tertiary}
              progress={progress}
              width={200}
            />
            <DefaultText style={styles.text}>{progress}%</DefaultText>
          </>
        ) : (
          <>
            <LottieView
              source={require('../assets/animations/done.json')}
              autoPlay
              loop={false}
              style={styles.animation}
              // onAnimationFinish={onDone}
            />
            <DefaultText style={styles.text}>
              Post berhasil ditambahkan
            </DefaultText>
          </>
        )}
      </View>
    </Modal>
  )
}

export default Upload
