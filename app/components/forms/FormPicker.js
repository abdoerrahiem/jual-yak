import React from 'react'
import {useFormikContext} from 'formik'
import Picker from '../Picker'
import ErrorMessage from './ErrorMessage'

const FormPicker = ({
  items,
  name,
  placeholder,
  width,
  PickerItemComponent,
  numberOfColumns,
}) => {
  const {errors, setFieldValue, touched, values} = useFormikContext()

  return (
    <>
      <Picker
        numberOfColumns={numberOfColumns}
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
        PickerItemComponent={PickerItemComponent}
      />
      {touched[name] && errors[name] && <ErrorMessage error={errors[name]} />}
    </>
  )
}

export default FormPicker
