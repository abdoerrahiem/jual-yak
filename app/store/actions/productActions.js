import api from '../../utils/api'
import axios from 'axios'
import * as types from '../types/productTypes'
import {createStorage, getStorage} from '../../utils/storage'

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({type: types.GET_PRODUCTS_REQUEST})

    const products = await getStorage('products')

    if (products) {
      dispatch({
        type: types.GET_PRODUCTS_SUCCESS,
        payload: products,
      })
    } else {
      const {data} = await axios.get(`${api}/listings`)

      createStorage('products', data)

      dispatch({
        type: types.GET_PRODUCTS_SUCCESS,
        payload: data,
      })
    }
  } catch (error) {
    dispatch({
      type: types.GET_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getCurrentUserProducts = () => async (dispatch) => {
  try {
    dispatch({type: types.GET_CURRENT_USER_PRODUCT_REQUEST})

    const token = await getStorage('token')

    const {data} = await axios.get(`${api}/my/listings`, {
      headers: {
        'x-auth-token': token,
      },
    })

    dispatch({
      type: types.GET_CURRENT_USER_PRODUCT_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: types.GET_CURRENT_USER_PRODUCT_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.response && error.response.data.message
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
        error.response && error.response.data.error
          ? error.response.data.error
          : error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
