import { createStore, applyMiddleware, combineReducers } from 'redux'
import countReducer from './reducers/count'
import personReducer from './reducers/person'

// 用于支持异步action
import thunk from 'redux-thunk'

const allReducers = combineReducers({
  sum: countReducer,
  persons: personReducer,
})

export default createStore(allReducers, applyMiddleware(thunk))
