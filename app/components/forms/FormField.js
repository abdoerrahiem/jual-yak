import React from 'react'
import {useFormikContext} from 'formik'
import Input from '../Input'
import ErrorMessage from './ErrorMessage'

const FormField = ({name, width, ...otherProps}) => {
  const {setFieldTouched, handleChange, errors, touched} = useFormikContext()

  return (
    <>
      <Input
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        width={width}
        {...otherProps}
      />
      {touched[name] && errors[name] && <ErrorMessage error={errors[name]} />}
    </>
  )
}

export default FormField
