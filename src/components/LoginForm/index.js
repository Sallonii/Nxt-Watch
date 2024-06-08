import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import ThemeContext from '../../context/ThemeContext'

import {LoginCardContainer, LoginMainContainer} from './styledComponents'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showErrorMsg: false,
    errorMsg: '',
  }

  togglePassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onChangingUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangingPassword = event => {
    this.setState({password: event.target.value})
  }

  onSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onFailure = errorMsg => {
    this.setState(prevState => ({
      showErrorMsg: !prevState.showErrorMsg,
      errorMsg,
    }))
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSuccess(data.jwt_token)
    } else {
      this.onFailure(data.error_msg)
    }
  }

  renderLoginCard = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const {showPassword, password, showErrorMsg, errorMsg} = this.state
        console.log(isDarkTheme)
        return (
          <LoginCardContainer
            isDarkTheme={isDarkTheme}
            onSubmit={this.submitForm}
          >
            <div className="logo-container">
              {isDarkTheme ? (
                <img
                  alt="website logo"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                  className="logo"
                />
              ) : (
                <img
                  alt="website logo"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  className="logo"
                />
              )}
            </div>
            <div className="input-container">
              <label htmlFor="username">USERNAME</label>
              <input
                id="username"
                placeholder="Username"
                onChange={this.onChangingUsername}
                className="text-input-element"
              />
            </div>
            <div className="input-container">
              <label htmlFor="password">PASSWORD</label>
              <input
                id="password"
                placeholder="Password"
                className="text-input-element"
                onChange={this.onChangingPassword}
                type={showPassword ? 'text' : 'password'}
                value={password}
              />
            </div>
            <div className="checkbox-input-container">
              <input
                id="showPassword"
                type="checkbox"
                defaultChecked={showPassword}
                onClick={this.togglePassword}
              />
              <label htmlFor="showPassword" className="checkbox-label-element">
                Show Password
              </label>
            </div>
            <button type="submit" className="submit-btn">
              Submit
            </button>
            {showErrorMsg && <p className="error-message">{errorMsg}</p>}
          </LoginCardContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <LoginMainContainer isDarkTheme={isDarkTheme}>
              {this.renderLoginCard()}
            </LoginMainContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default LoginForm
