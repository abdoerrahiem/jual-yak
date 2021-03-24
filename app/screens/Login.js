import React from 'react'
import {Image, StyleSheet} from 'react-native'
import * as Yup from 'yup'
import {useSelector, useDispatch} from 'react-redux'

import Screen from '../components/Screen'
import {ErrorMessage, Form, FormField, SubmitButton} from '../components/forms'
import {login} from '../store/actions/authActions'

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  container: {
    padding: 10,
  },
})

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
})

const Login = () => {
  const dispatch = useDispatch()
  const {loading, error} = useSelector((state) => state.auth)

  const handleSubmit = ({email, password}) => {
    dispatch(login(email, password))
  }

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/img/logo.png')} />
      {error && <ErrorMessage error={error} />}
      <Form
        initialValues={{email: '', password: ''}}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}>
        <FormField
          name="email"
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <FormField
          name="password"
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          placeholder="Password"
          textContentType="password"
          secureTextEntry
        />
        <SubmitButton
          disabled={loading}
          title={loading ? 'Loading...' : 'Masuk'}
        />
      </Form>
    </Screen>
  )
}

export default Login

// video 7
