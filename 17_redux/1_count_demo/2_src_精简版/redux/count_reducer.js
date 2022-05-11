export default function countReducer(preState, action) {
  if (preState === undefined) preState = 100
  const { type, data } = action
  switch (type) {
    case 'incr':
      return preState + data
    case 'decr':
      return preState - data
    default:
      return preState
  }
}
