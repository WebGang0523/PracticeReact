import React, { Component } from 'react'
import store from '../../redux/store'
import {
  createDecrAction,
  createIncrAction,
  createIncrAsyncAction,
} from '../../redux/count_action'

export default class Count extends Component {
  componentDidMount() {
    store.subscribe(() => {
      this.setState({})
    })
  }

  incr = () => {
    const { value } = this.selectEle
    store.dispatch(createIncrAction(value * 1))
  }

  decr = () => {
    const { value } = this.selectEle
    store.dispatch(createDecrAction(value * 1))
  }

  incrIfOdd = () => {
    const { value } = this.selectEle
    const sum = store.getState()
    if (sum % 2 !== 0) {
      store.dispatch(createIncrAction(value * 1))
    }
  }

  incrAsync = () => {
    const { value } = this.selectEle
    store.dispatch(createIncrAsyncAction(value * 1, 500))
  }

  render() {
    return (
      <div>
        <h2>当前求和为：{store.getState()}</h2>
        <select ref={(c) => (this.selectEle = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.incr}>+</button> &nbsp;
        <button onClick={this.decr}>-</button> &nbsp;
        <button onClick={this.incrIfOdd}>当前和为奇数再加</button> &nbsp;
        <button onClick={this.incrAsync}>异步加</button>
      </div>
    )
  }
}
