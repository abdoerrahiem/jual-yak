import React from 'react'
import {Image, StyleSheet} from 'react-native'
import * as Yup from 'yup'
import {useSelector, useDispatch} from 'react-redux'

import Screen from '../components/Screen'
import Loader from '../components/Loader'
import {Form, FormField, SubmitButton, ErrorMessage} from '../components/forms'
import {register} from '../store/actions/userActions'

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
  name: Yup.string().required().label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
})

const Register = () => {
  const dispatch = useDispatch()
  const {loading, error} = useSelector((state) => state.register)

  const handleSubmit = ({name, email, password}) => {
    dispatch(register(name, email, password))
  }

  return (
    <>
      {loading && <Loader />}
      <Screen style={styles.container}>
        <Image style={styles.logo} source={require('../assets/img/logo.png')} />
        {error && <ErrorMessage error={error} />}
        <Form
          initialValues={{name: '', email: '', password: ''}}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}>
          <FormField
            name="name"
            autoCorrect={false}
            icon="account"
            placeholder="Nama"
          />
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
            title={loading ? 'Loading...' : 'Daftar'}
          />
        </Form>
      </Screen>
    </>
  )
}

export default Register
