import React from 'react'
import {Alert, StyleSheet} from 'react-native'
import * as Yup from 'yup'
import {useDispatch, useSelector} from 'react-redux'

import Screen from '../components/Screen'
import {
  Form,
  FormField,
  FormPicker,
  FormImagePicker,
  SubmitButton,
} from '../components/forms'
import CategoryPickerItem from '../components/CategoryPickerItem'
import useLocation from '../hooks/useLocation'
import {createProduct} from '../store/actions/productActions'

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
  title: Yup.string().required('Judul harus diisi.').min(1).label('Judul'),
  price: Yup.number()
    .required('Harga harus diisi.')
    .min(4)
    .max(10000)
    .label('Harga'),
  description: Yup.string().label('Deskripsi'),
  category: Yup.object()
    .required('Silahkan pilih kategori.')
    .nullable()
    .label('Kategori'),
  images: Yup.array().min(1, 'Tambahkan minimal 1 gambar.').label('Gambar'),
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
  const location = useLocation()

  const dispatch = useDispatch()

  const {product, loading, error} = useSelector((state) => state.product)

  const handleSubmit = (data) => {
    console.log('hai')
    dispatch(createProduct({...data, location}))
    // alert('success')
    console.log('hai')
  }

  return (
    <Screen style={styles.container}>
      {/* {product && alert('Success')} */}
      <Form
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}>
        <FormImagePicker name="images" />
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
