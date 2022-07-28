import React, { Component } from 'react';
import "./css/landing.css";
import Logo from "./Logo"


class Login extends Component {
  // Logic for the form
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      aadhar: '',
      password: '',
      confirm: '',
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleInput(e) {
    const target = e.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value
    })
  }
  handleSubmit(e) {
    e.preventDefault();
    fetch('/users_create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'fff',
        email: this.state.email,
        aadhar: this.state.aadhar,
        confirm: this.state.confirm
      })
    })
      .then(response => response.json())
      .then(data => console.log(data))
    // if (response.status !== 200) {
    //     throw Error(body.message)
    // }
    // return body;
  }
  render() {

    return (
      <React.Fragment>
        {/* Renders the form */}
        <div className="adjust-login">
          <div id='login-component'>
            <div className="short-logo-center">{<Logo className="logo short-logo-center" />}</div>
            <h1 className='login-info'>Register</h1>
            <section>
              <form className="login-form" onSubmit={this.handleSubmit}>
                <div className="login-entries">
                  <div className='login-label'>
                    Username
                  </div>
                  <input name="username" autoComplete="off" className="login-fields" type="text" value={this.state.username} onChange={this.handleInput} />
                </div>
                <div className="login-entries">
                  <div className='login-label'>
                    Aadhar Card Number
                  </div>
                  <input name="aadhar" autoComplete="off" className="login-fields" type="text" value={this.state.aadhar} onChange={this.handleInput} />
                </div>
                <div className="login-entries">
                  <div className='login-label'>
                    Password
                  </div>
                  <input name="password" autoComplete="off" className="login-fields" type="password" value={this.state.password} onChange={this.handleInput} />
                </div>
                <div className="login-entries">
                  <div className='login-label'>
                    Confirm
                  </div>
                  <input name="confirm" autoComplete="off" className="login-fields" type="password" value={this.state.confirm} onChange={this.handleInput} />
                </div>
                <input class="form-submit" type="submit" value="Submit" />
              </form>
            </section>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Login;