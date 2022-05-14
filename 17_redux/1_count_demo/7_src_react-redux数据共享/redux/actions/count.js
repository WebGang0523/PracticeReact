import { INCR, DECR } from '../constant'

export const createIncrAction = (data) => ({ type: INCR, data })

export const createDecrAction = (data) => ({ type: DECR, data })

export const createIncrAsyncAction = (data, time) => {
  return (dispatch) => {
    setTimeout(() => dispatch(createIncrAction(data * 1)), time)
  }
}
