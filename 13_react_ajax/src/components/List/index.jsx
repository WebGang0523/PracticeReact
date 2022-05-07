import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
  render() {
    const { users, isFirst, isLoading, err } = this.props
    return (
      <div className="row">
        {isFirst ? (
          <h2>输入关键词，点击搜索</h2>
        ) : isLoading ? (
          <h2>Loading</h2>
        ) : err ? (
          <h2 style={{ color: 'red' }}>{err}</h2>
        ) : (
          users.map((user) => {
            return (
              <div className="card" key={user.id}>
                <a href={user.html_url} target="_blank" rel="noreferrer">
                  <img
                    src={user.avatar_url}
                    style={{ width: '100px' }}
                    alt=""
                  />
                </a>
                <p className="card-text">{user.login}</p>
              </div>
            )
          })
        )}
      </div>
    )
  }
}
