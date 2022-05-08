import React, { Component } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink'
import Messages from './Messages'
import News from './News'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home组件内容</h2>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink to="/home/news">News</MyNavLink>
            </li>
            <li>
              <MyNavLink to="/home/messages">Message</MyNavLink>
            </li>
          </ul>
          <Routes>
            <Route path="/news" element={<News />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/" element={<Navigate to="/home/news" />} />
          </Routes>
        </div>
      </div>
    )
  }
}
