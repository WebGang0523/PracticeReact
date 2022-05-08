import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="row">
            <div className="col-xs-offset-2 col-xs-8">
              <div className="page-header">
                <h2>React Router Demo</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
              <div className="list-group">
                {/* <a className="list-group-item active" href="./about.html">
                About
              </a>
              <a className="list-group-item" href="./home.html">
                Home
              </a> */}
                <Link to="/about" className="list-group-item">
                  About
                </Link>
                <Link to="/home" className="list-group-item">
                  Home
                </Link>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                  <Routes>
                    <Route path="/home" element={<About />} />
                    <Route path="/about" element={<Home />} />
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}
