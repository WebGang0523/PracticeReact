import { INCR, DECR } from './constant'

export const createIncrAction = (data) => ({ type: INCR, data })

export const createDecrAction = (data) => ({ type: DECR, data })
