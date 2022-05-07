import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
  search = () => {
    // 连续解构赋值并重命名
    const {
      keyWordElement: { value: keyword },
    } = this

    const { updateAppState } = this.props
    updateAppState({ isFirst: false, isLoading: true })
    axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
      (response) => {
        updateAppState({
          isLoading: false,
          users: response.data.items,
          err: '',
        })
      },
      (err) => {
        updateAppState({ isLoading: false, err: err.message, users: [] })
      }
    )
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索github用户</h3>
        <div>
          <input
            type="text"
            placeholder="输入关键词"
            ref={(c) => {
              this.keyWordElement = c
            }}
          />
          &nbsp;<button onClick={this.search}>搜索</button>
        </div>
      </section>
    )
  }
}
