import React, { Component } from 'react'

export default class Demo extends Component {
  state = { count: 0 }
  add = () => {
    const { count } = this.state

    // 对象式
    // this.setState({ count: count + 1 }, () => {
    //   console.log(this.state.count)
    // })
    // 函数式
    this.setState(
      (state, props) => {
        return { count: state.count + 1 }
      },
      () => {
        console.log(this.state.count)
      }
    )
  }
  render() {
    return (
      <div>
        <h1>求和为{this.state.count}</h1>
        <button onClick={this.add}>点击加1</button>
      </div>
    )
  }
}
