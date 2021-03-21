import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import {createProduct, getProducts} from './reducers/productReducers'

const rootReducers = combineReducers({
  products: getProducts,
  product: createProduct,
})

const initialState = {}
const middleware = [thunk]

const store = createStore(
  rootReducers,
  initialState,
  applyMiddleware(...middleware),
)

export default store
