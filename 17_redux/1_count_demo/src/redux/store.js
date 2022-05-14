import { createStore, applyMiddleware } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'

import allReducers from './reducers'

// 用于支持异步action
import thunk from 'redux-thunk'

export default createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(thunk))
)
