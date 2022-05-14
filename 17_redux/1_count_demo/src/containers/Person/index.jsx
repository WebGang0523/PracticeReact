import React, { Component } from 'react'
import { connect } from 'react-redux'
import { nanoid } from 'nanoid'
import { createAddPersonAction } from '../../redux/actions/persion'

class Person extends Component {
  addPerson = () => {
    const id = nanoid()
    const name = this.nameNode.value
    const age = this.ageNode.value
    const personObj = { id, name, age }
    this.props.addPerson(personObj)
  }
  render() {
    const { persons, sum } = this.props
    return (
      <div>
        <h2>我是Person组件</h2>
        <input
          ref={(c) => (this.nameNode = c)}
          type="text"
          placeholder="请输入名字"
        />
        <input
          ref={(c) => (this.ageNode = c)}
          type="text"
          placeholder="请输入年龄"
        />
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {persons.map((personObj) => {
            return (
              <li key={personObj.id}>
                名字--{personObj.name},年龄--{personObj.age}
              </li>
            )
          })}
        </ul>

        <h2>Count组件的求和为{sum}</h2>
      </div>
    )
  }
}

export default connect(
  (state) => ({ persons: state.persons, sum: state.sum }),
  {
    addPerson: createAddPersonAction,
  }
)(Person)
