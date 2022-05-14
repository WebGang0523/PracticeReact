import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  createDecrAction,
  createIncrAction,
  createIncrAsyncAction,
} from '../../redux/actions/count'

class Count extends Component {
  incr = () => {
    const { add } = this.props
    const { value } = this.selectEle
    add(value * 1)
  }

  decr = () => {
    const { sub } = this.props
    const { value } = this.selectEle
    sub(value * 1)
  }

  incrIfOdd = () => {
    const { sum, add } = this.props
    const { value } = this.selectEle
    if (sum % 2 !== 0) {
      add(value * 1)
    }
  }

  incrAsync = () => {
    const { addAsync } = this.props
    const { value } = this.selectEle
    addAsync(value * 1, 500)
  }

  render() {
    return (
      <div>
        <h2>我是Count组件</h2>
        <h4>当前求和为：{this.props.sum}</h4>
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
        <h2>Person组件的人</h2>
        <ul>
          {this.props.persons.map((personObj) => {
            return (
              <li key={personObj.id}>
                名字--{personObj.name},年龄--{personObj.age}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default connect(
  (state) => ({ sum: state.sum, persons: state.persons }),
  {
    add: createIncrAction,
    sub: createDecrAction,
    addAsync: createIncrAsyncAction,
  }
)(Count)
