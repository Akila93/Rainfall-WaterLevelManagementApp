import React from 'react';
import '../styles/index.scss';
import '../styles/bootstrap-3.3.7-dist/css/bootstrap.min.css';
import $ from '../jquery/jquery-3.1.1.min.js';
export default class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
      	<div className="page-header">
          <h1>Water Management System <small>Rainfall and waterfall prediction</small></h1>
          <br/>
          <ul className="nav nav-pills">
            <li role="presentation" className="active"><a href="#">Home</a></li>
            <li role="presentation"><a href="#">Profile</a></li>
            <li role="presentation"><a href="#">Messages</a></li>
          </ul>
        </div>

        <h1>It Works!</h1>
        <p>This React project just works including test_nimash123<span className="redBg">module</span> local styles.</p>
        <p>Enjoy!</p>
        <button className="btn btn-default">ok</button>
      </div>
    )
  }
}


