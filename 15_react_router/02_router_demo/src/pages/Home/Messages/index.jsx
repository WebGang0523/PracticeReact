import React, { Component } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Detail from './Detail'

export default class Messages extends Component {
  state = {
    messages: [
      { id: '01', title: '消息1' },
      { id: '02', title: '消息2' },
      { id: '03', title: '消息3' },
    ],
  }
  render() {
    const { messages } = this.state
    return (
      <div>
        <ul>
          {messages.map((message) => {
            return (
              <li key={message.id}>
                {/* <Link to={`/home/messages/${message.id}`}>{message.title}</Link> */}
                {/* <Link to={`/home/messages/detail?id=${message.id}`}>
                  {message.title}
                </Link> */}

                <Link to={`/home/messages/detail`} state={{ id: message.id }}>
                  {message.title}
                </Link>
              </li>
            )
          })}
        </ul>
        <hr />
        <Routes>
          {/* <Route path=":id" element={<Detail />} /> */}
          <Route path="detail" element={<Detail />} />
        </Routes>
      </div>
    )
  }
}
