import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import {
  createProduct,
  getProducts,
  getCurrentUserProduct,
} from './reducers/productReducers'
import {login, getCurrentUser} from './reducers/authReducers'
import {register} from './reducers/userReducers'

const rootReducers = combineReducers({
  products: getProducts,
  myProducts: getCurrentUserProduct,
  product: createProduct,
  login,
  register,
  currentUser: getCurrentUser,
})

const initialState = {}
const middleware = [thunk]

const store = createStore(
  rootReducers,
  initialState,
  applyMiddleware(...middleware),
)

export default store
