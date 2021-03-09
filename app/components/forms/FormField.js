import React from 'react'
import {useFormikContext} from 'formik'
import Input from '../Input'
import ErrorMessage from './ErrorMessage'

const FormField = ({name, ...otherProps}) => {
  const {setFieldTouched, handleChange, errors, touched} = useFormikContext()

  return (
    <>
      <Input
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      {touched[name] && <ErrorMessage error={errors[name]} />}
    </>
  )
}

export default FormField
