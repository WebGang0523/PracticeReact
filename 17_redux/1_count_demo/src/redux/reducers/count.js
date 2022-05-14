import { INCR, DECR } from '../constant'

export default function countReducer(preState, action) {
  if (preState === undefined) preState = 100
  const { type, data } = action
  switch (type) {
    case INCR:
      return preState + data
    case DECR:
      return preState - data
    default:
      return preState
  }
}
