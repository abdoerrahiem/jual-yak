import React from 'react'
import {Image, StyleSheet} from 'react-native'
import * as Yup from 'yup'
import Screen from '../components/Screen'
import {Form, FormField, SubmitButton} from '../components/forms'
import Picker from '../components/Picker'

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
  title: Yup.string().required().min(1).label('Judul'),
  price: Yup.number().required().min(4).max(10000).label('Harga'),
  description: Yup.string().label('Deskripsi'),
  category: Yup.object().required().nullable().label('Kategori'),
})

const categories = [
  {label: 'Furnitur', value: 1},
  {label: 'Pakaian', value: 2},
  {label: 'Kamera', value: 3},
]

const ProductEdit = () => {
  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}>
        <FormField name="title" maxLength={255} placeholder="Judul" />
        <FormField
          name="price"
          //   maxLength={8}
          placeholder="Harga"
          keyboardType="numeric"
        />
        <Picker items={categories} name="category" placeholder="Kategori" />
        <FormField
          name="description"
          maxLength={255}
          placeholder="Deskripsi"
          multiline
          numberOfLines={5}
        />

        <SubmitButton title="Post" />
      </Form>
    </Screen>
  )
}

export default ProductEdit
