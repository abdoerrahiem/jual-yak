import axios from 'axios'
import jwtDecode from 'jwt-decode'
import api from '../../utils/api'
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

    const user = jwtDecode(data)

    dispatch({
      type: types.LOGIN_SUCCESS,
      payload: user,
    })
  } catch (error) {
    console.log(error.response.data.error)
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
