import * as types from '../types/userTypes'

export const register = (state = {user: null}, action) => {
  const {type, payload} = action

  switch (type) {
    case types.REGISTER_REQUEST:
      return {
        loading: true,
      }
    case types.REGISTER_SUCCESS:
      return {
        loading: false,
        user: payload,
      }
    case types.REGISTER_FAIL:
      return {
        loading: false,
        user: null,
        error: payload,
      }
    default:
      return state
  }
}
