import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import {createProduct, getProducts} from './reducers/productReducers'
import {login} from './reducers/authReducers'

const rootReducers = combineReducers({
  products: getProducts,
  product: createProduct,
  auth: login,
})

const initialState = {}
const middleware = [thunk]

const store = createStore(
  rootReducers,
  initialState,
  applyMiddleware(...middleware),
)

export default store
