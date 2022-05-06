import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  state = { mouse: false }
  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag })
    }
  }
  handleChecked = (id) => {
    return (event) => {
      this.props.updateTodo(id, event.target.checked)
    }
  }
  handleDelete = (id) => {
    return () => {
      if (!window.confirm('确定删除嘛？')) return
      this.props.deleteTodo(id)
    }
  }
  render() {
    const { todo } = this.props
    const { mouse } = this.state
    return (
      <li
        style={{ backgroundColor: mouse ? '#ddd' : 'white' }}
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
      >
        <label>
          <input
            type="checkbox"
            defaultChecked={todo.done}
            onChange={this.handleChecked(todo.id)}
          />
          <span>{todo.name}</span>
        </label>
        <button
          className="btn btn-danger"
          style={{ display: mouse ? 'block' : 'none' }}
          onClick={this.handleDelete(todo.id)}
        >
          删除
        </button>
      </li>
    )
  }
}
