import axios from 'axios'
import api from '../../utils/api'
import * as types from '../types/userTypes'
import {login} from './authActions'

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({type: types.REGISTER_REQUEST})

    const {data} = await axios.post(
      `${api}/users`,
      {
        name,
        email,
        password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )

    dispatch({
      type: types.REGISTER_SUCCESS,
      payload: data,
    })

    dispatch(login(email, password))
  } catch (error) {
    dispatch({
      type: types.REGISTER_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
