import Cookies from 'js-cookie'

import {withRouter} from 'react-router-dom'

import {FaMoon, FaRegUserCircle} from 'react-icons/fa'

import {
  IoReorderThreeOutline,
  IoLogOutOutline,
  IoSunnyOutline,
} from 'react-icons/io5'

import {HeaderMainContainer, ReactIcon, LogoutButton} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Header = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const changeTheme = () => {
        toggleTheme()
      }

      const onLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <HeaderMainContainer isDarkTheme={isDarkTheme}>
          {isDarkTheme ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
              alt="website logo"
              className="header-website-logo"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="website logo"
              className="header-website-logo"
            />
          )}

          {/* Mobile View Icons */}
          <div className="header-elements-container mobile-view">
            <ReactIcon
              type="button"
              data-testid="theme"
              isDarkTheme={isDarkTheme}
            >
              {isDarkTheme ? (
                <IoSunnyOutline onClick={changeTheme} />
              ) : (
                <FaMoon onClick={changeTheme} />
              )}
            </ReactIcon>
            <ReactIcon type="button" isDarkTheme={isDarkTheme}>
              <IoReorderThreeOutline />
            </ReactIcon>
            <ReactIcon
              type="button"
              isDarkTheme={isDarkTheme}
              onClick={onLogout}
            >
              <IoLogOutOutline />
            </ReactIcon>
          </div>

          {/* Desktop View Icons */}
          <div className="header-elements-container desktop-view">
            <ReactIcon
              type="button"
              data-testid="theme"
              isDarkTheme={isDarkTheme}
            >
              {isDarkTheme ? (
                <IoSunnyOutline onClick={changeTheme} />
              ) : (
                <FaMoon onClick={changeTheme} />
              )}
            </ReactIcon>
            <ReactIcon type="button" isDarkTheme={isDarkTheme}>
              <FaRegUserCircle />
            </ReactIcon>
            <LogoutButton
              type="button"
              isDarkTheme={isDarkTheme}
              onClick={onLogout}
            >
              Logout
            </LogoutButton>
          </div>
        </HeaderMainContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Header)
