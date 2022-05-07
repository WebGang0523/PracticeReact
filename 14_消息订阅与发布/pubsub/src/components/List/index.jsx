import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {
  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    err: '',
  }

  componentDidMount() {
    this.pubSubToken = PubSub.subscribe('updateAppState', this.updateAppState)
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.pubSubToken)
  }

  updateAppState = (_, data) => {
    this.setState(data)
  }

  render() {
    const { users, isFirst, isLoading, err } = this.state
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
