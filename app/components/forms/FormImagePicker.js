import React from 'react'
import {useFormikContext} from 'formik'
import ImageInputList from '../ImageInputList'
import ErrorMessage from './ErrorMessage'

const FormImagePicker = ({name}) => {
  const {errors, setFieldValue, touched, values} = useFormikContext()

  const handleAdd = (uri) => setFieldValue(name, [...values[name], uri])

  const handleRemove = (uri) =>
    setFieldValue(
      name,
      values[name].filter((imageUri) => imageUri !== uri),
    )

  return (
    <>
      <ImageInputList
        imageUris={values[name]}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      {touched[name] && errors[name] && <ErrorMessage error={errors[name]} />}
    </>
  )
}

export default FormImagePicker
