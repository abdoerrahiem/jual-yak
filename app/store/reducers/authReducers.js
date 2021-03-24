import * as types from '../types/authTypes'

export const login = (state = {user: null}, action) => {
  const {type, payload} = action

  switch (type) {
    case types.LOGIN_REQUEST:
      return {
        loading: true,
      }
    case types.LOGIN_SUCCESS:
      return {
        loading: false,
        user: payload,
      }
    case types.LOGIN_FAIL:
      return {
        loading: false,
        user: null,
        error: payload,
      }
    default:
      return state
  }
}
