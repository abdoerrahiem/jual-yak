import * as types from '../types/productTypes'

export const getProducts = (state = {products: []}, action) => {
  const {type, payload} = action

  switch (type) {
    case types.GET_PRODUCTS_REQUEST:
      return {
        loading: true,
        products: [],
      }
    case types.GET_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: payload,
      }
    case types.GET_PRODUCTS_FAIL:
      return {
        loading: false,
        error: payload,
      }
    default:
      return state
  }
}

export const createProduct = (state = {}, action) => {
  const {type, payload} = action

  switch (type) {
    case types.CREATE_PRODUCT_REQUEST:
      return {
        loading: true,
      }
    case types.CREATE_PRODUCT_SUCCESS:
      return {
        loading: false,
        product: payload,
      }
    case types.CREATE_PRODUCT_FAIL:
      return {
        loading: false,
        error: payload,
      }
    default:
      return state
  }
}
