import {Component} from 'react'

import Header from '../Header'
import TabContainer from '../TabContainer'
import ThemeContext from '../../context/ThemeContext'

import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundPara,
} from './styledComponents'

class NotFound extends Component {
  renderNotFound = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        console.log(isDarkTheme)

        return (
          <NotFoundContainer isDarkTheme={isDarkTheme}>
            {isDarkTheme ? (
              <NotFoundImage
                alt="not found"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
              />
            ) : (
              <NotFoundImage
                alt="not found"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png"
              />
            )}
            <NotFoundHeading isDarkTheme={isDarkTheme}>
              Page Not Found
            </NotFoundHeading>
            <NotFoundPara isDarkTheme={isDarkTheme}>
              we are sorry, the page you requested could not be found.
            </NotFoundPara>
          </NotFoundContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  render() {
    return (
      <>
        <Header />
        <div className="main-container">
          <TabContainer />
          {this.renderNotFound()}
        </div>
      </>
    )
  }
}

export default NotFound
