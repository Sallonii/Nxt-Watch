import ThemeContext from '../../context/ThemeContext'

import {FailureContainer, FailureHeading, FailurePara} from './styledComponents'

const renderFailureView = props => {
  const {retry} = props
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const onClickingRetry = () => {
          retry()
        }

        return (
          <FailureContainer>
            {isDarkTheme ? (
              <img
                alt="failure view"
                className="failure-image"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
              />
            ) : (
              <img
                alt="failure view"
                className="failure-image"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
              />
            )}
            <FailureHeading isDarkTheme={isDarkTheme}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailurePara isDarkTheme={isDarkTheme}>
              We are having some trouble
            </FailurePara>
            <button
              type="button"
              className="retry-btn"
              onClick={onClickingRetry}
            >
              Retry
            </button>
          </FailureContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default renderFailureView
