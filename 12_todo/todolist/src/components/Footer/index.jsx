import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Footer extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
  }

  handleClearAll = () => {
    this.props.clearAllTodo()
  }

  handleCheckAll = (event) => {
    this.props.checkAllTodo(event.target.checked)
  }

  render() {
    const { todos } = this.props
    const total = todos.length
    const doneCount = todos.reduce((prev, current) => {
      return prev + (current.done ? 1 : 0)
    }, 0)
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            checked={doneCount === total && total > 0 ? true : false}
            onChange={this.handleCheckAll}
          />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button className="btn btn-danger" onClick={this.handleClearAll}>
          清除已完成任务
        </button>
      </div>
    )
  }
}
