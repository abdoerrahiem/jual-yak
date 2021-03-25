import axios from 'axios'
import jwtDecode from 'jwt-decode'
import api from '../../utils/api'
import {createStorage, getStorage, removeStorage} from '../../utils/storage'
import * as types from '../types/authTypes'

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({type: types.LOGIN_REQUEST})

    const {data} = await axios.post(
      `${api}/auth`,
      {
        email,
        password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )

    createStorage('token', data)

    const user = jwtDecode(data)

    dispatch({
      type: types.LOGIN_SUCCESS,
      payload: user,
    })

    dispatch(getCurrentUser())
  } catch (error) {
    dispatch({
      type: types.LOGIN_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getCurrentUser = () => async (dispatch) => {
  try {
    dispatch({
      type: types.GET_CURRENT_USER_REQUEST,
    })

    const token = await getStorage('token')

    const user = jwtDecode(token)

    dispatch({
      type: types.GET_CURRENT_USER_SUCCESS,
      payload: user,
    })
  } catch (error) {
    dispatch({
      type: types.GET_CURRENT_USER_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const logout = () => async (dispatch) => {
  removeStorage('token')

  dispatch({
    type: types.LOGOUT,
  })
}
