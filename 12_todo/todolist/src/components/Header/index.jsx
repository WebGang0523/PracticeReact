import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import './index.css'

export default class Header extends Component {
  handleKeyUp = (event) => {
    if (event.key !== 'Enter') return
    const name = event.target.value
    if (!name) {
      alert('输入不能为空')
      return
    }
    const todo = { id: nanoid(), name: name.trim(), done: false }
    const { addTodo } = this.props
    addTodo(todo)
    event.target.value = ''
  }
  render() {
    return (
      <div className="todo-header">
        <input
          onKeyUp={this.handleKeyUp}
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"
        />
      </div>
    )
  }
}
