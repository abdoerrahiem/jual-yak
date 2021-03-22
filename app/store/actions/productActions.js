import api from '../../utils/api'
import axios from 'axios'
import * as types from '../types/productTypes'

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({type: types.GET_PRODUCTS_REQUEST})

    const {data} = await axios.get(`${api}/listings`)

    dispatch({
      type: types.GET_PRODUCTS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: types.GET_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const createProduct = (
  {title, price, category, description, images, location},
  onUploadProgress,
) => async (dispatch) => {
  try {
    dispatch({type: types.CREATE_PRODUCT_REQUEST})

    const config = {
      onUploadProgress: (progressEvent) =>
        onUploadProgress(
          Math.round((progressEvent.loaded * 100) / progressEvent.total),
        ),
    }

    const formData = new FormData()
    formData.append('title', title)
    formData.append('price', price)
    formData.append('categoryId', category.value)
    formData.append('description', description)
    images.forEach((image, index) =>
      formData.append('images', {
        name: `${image}-${index}`,
        type: 'image/jpeg',
        uri: image,
      }),
    )
    if (location) formData.append('location', JSON.stringify(location))

    const {data} = await axios.post(`${api}/listings`, formData, config)

    console.log(data)

    dispatch({
      type: types.CREATE_PRODUCT_SUCCESS,
      payload: data,
    })
  } catch (error) {
    console.log(error)
    dispatch({
      type: types.CREATE_PRODUCT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
