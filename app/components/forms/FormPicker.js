import React from 'react'
import {useFormikContext} from 'formik'
import Picker from '../Picker'
import ErrorMessage from './ErrorMessage'

const FormPicker = ({items, name, placeholder}) => {
  const {errors, setFieldValue, touched, values} = useFormikContext()

  return (
    <>
      <Picker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
      />
      {touched[name] && <ErrorMessage error={errors[name]} />}
    </>
  )
}

export default FormPicker
