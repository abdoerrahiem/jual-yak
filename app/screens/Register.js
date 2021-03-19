import React from 'react'
import {Image, StyleSheet} from 'react-native'
import * as Yup from 'yup'
import Screen from '../components/Screen'
import {Form, FormField, SubmitButton} from '../components/forms'

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
  name: Yup.string().required().email().label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
})

const Register = ({navigation}) => {
  const {navigate} = navigation

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/img/logo.png')} />
      <Form
        initialValues={{email: '', password: ''}}
        onSubmit={(values) => console.log(values)}
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
        <SubmitButton title="Daftar" />
      </Form>
    </Screen>
  )
}

export default Register
