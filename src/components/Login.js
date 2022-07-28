import React, { Component } from 'react';
import "./css/landing.css";
import Logo from "./Logo"


//component for LoginForm. used in App.js
class Login extends Component {
  // Logic for the form
  constructor(props) {
    super(props);
    //initialization for entry fields
    this.state = {
      username: '',
      password: '',
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  //handles change in input.
  handleInput(e) {
    const target = e.target
    const value = target.value
    const name = target.name
    console.log(value)
    this.setState({
      [name]: value
    })
  }
  //sends api request for GUNing
  handleSubmit(e) {
    // createUser = async () => {
    // const response = await fetch('/users_create', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         username: this.state.username,
    //         password: this.state.password,
    //         email: this.state.email,
    //         confirm: this.state.confirm
    //     })
    // });
    // };
  }
  render() {
    return (
      <React.Fragment>
        {/* Renders the form */}
        <div className="adjust-login">
          <div id='login-component'>
            <div className="short-logo-center">{<Logo className="logo short-logo-center" />}</div>
            <h1 className='login-info'>Login</h1>
            <section>
              <form className="login-form" onsubmit={this.handleSubmit}>
                <div className="login-entries">
                  <div className='login-label'>
                    Username / Aadhar Card Number
                  </div>
                  <input name="username" autoComplete="off" className="login-fields" type="text" value={this.state.username} onChange={this.handleInput} />
                </div>

                <div className="login-entries">
                  <div className='login-label'>
                    Password
                  </div>
                  <input name="password" autoComplete="off" className="login-fields" type="password" value={this.state.password} onChange={this.handleInput} />
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