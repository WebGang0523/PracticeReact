import React, { Component } from 'react'

export default class Count extends Component {
  state = {
    sum: 0,
  }

  incr = () => {
    const { value } = this.selectEle
    const { sum } = this.state
    this.setState({ sum: sum + value * 1 })
  }

  decr = () => {
    const { value } = this.selectEle
    const { sum } = this.state
    this.setState({ sum: sum - value * 1 })
  }

  incrIfOdd = () => {
    const { value } = this.selectEle
    const { sum } = this.state
    if (sum % 2 !== 0) {
      this.setState({ sum: sum + value * 1 })
    }
  }

  incrAsync = () => {
    const { value } = this.selectEle
    const { sum } = this.state

    setTimeout(() => {
      this.setState({ sum: sum + value * 1 })
    }, 1000)
  }

  render() {
    return (
      <div>
        <h2>当前求和为：{this.state.sum}</h2>
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
