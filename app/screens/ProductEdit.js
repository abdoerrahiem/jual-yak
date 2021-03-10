import React from 'react'
import {Image, StyleSheet} from 'react-native'
import * as Yup from 'yup'
import Screen from '../components/Screen'
import {Form, FormField, FormPicker, SubmitButton} from '../components/forms'
import CategoryPickerItem from '../components/CategoryPickerItem'

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
  {
    backgroundColor: '#fc5c65',
    icon: 'floor-lamp',
    label: 'Furnitur',
    value: 1,
  },
  {
    backgroundColor: '#fd9644',
    icon: 'car',
    label: 'Mobil',
    value: 2,
  },
  {
    backgroundColor: '#fed330',
    icon: 'camera',
    label: 'Kamera',
    value: 3,
  },
  {
    backgroundColor: '#26de81',
    icon: 'cards',
    label: 'Game',
    value: 4,
  },
  {
    backgroundColor: '#2bcbba',
    icon: 'shoe-heel',
    label: 'Pakaian',
    value: 5,
  },
  {
    backgroundColor: '#45aaf2',
    icon: 'basketball',
    label: 'Olahraga',
    value: 6,
  },
  {
    backgroundColor: '#4b7bec',
    icon: 'headphones',
    label: 'Film & Musik',
    value: 7,
  },
  {
    backgroundColor: '#a55eea',
    icon: 'book-open-variant',
    label: 'Buku',
    value: 8,
  },
  {
    backgroundColor: '#778ca3',
    icon: 'application',
    label: 'Lainnya',
    value: 9,
  },
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
          width={150}
        />
        <FormPicker
          numberOfColumns={3}
          items={categories}
          name="category"
          placeholder="Kategori"
          width="50%"
          PickerItemComponent={CategoryPickerItem}
        />
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
