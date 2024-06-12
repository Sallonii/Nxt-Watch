import {Component} from 'react'

import Cookies from 'js-cookie'

import './index.css'

import Loader from 'react-loader-spinner'

import {MdClose, MdSearch} from 'react-icons/md'

import ThemeContext from '../../context/ThemeContext'
import VideoItem from '../VideoItem'

import {
  MainContainer,
  InputContainer,
  InputElement,
  InputSearchButton,
  FailureHeading,
  FailurePara,
} from './styledComponents'

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class HomePage extends Component {
  state = {
    videosList: [],
    displayBanner: true,
    videosStatus: apiConstants.initial,
    searchValue: '',
  }

  componentDidMount() {
    this.getVideos()
  }

  onChangingSearchInput = event => {
    this.setState({searchValue: event.target.value})
  }

  onClickingSearch = () => {
    this.getVideos()
  }

  onSuccess = videosData => {
    const formattedData = videosData.map(eachVideo => ({
      id: eachVideo.id,
      channel: {
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
      },
      publishedAt: eachVideo.published_at,
      thumbnailUrl: eachVideo.thumbnail_url,
      title: eachVideo.title,
      viewCount: eachVideo.view_count,
    }))

    this.setState({
      videosList: formattedData,
      videosStatus: apiConstants.success,
    })
  }

  getVideos = async () => {
    const {searchValue} = this.state
    this.setState({videosStatus: apiConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const api = `https://apis.ccbp.in/videos/all?search=${searchValue}`

    const response = await fetch(api, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSuccess(data.videos)
    }
  }

  closeBanner = () => {
    this.setState({displayBanner: false})
  }

  renderPopup = () => (
    <div className="banner-container">
      <div>
        <img
          alt="website logo"
          className="website-logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        />
        <h1 className="banner-heading">
          Buy NxtWatch Premium prepaid plans with UPI
        </h1>
        <button type="button" className="banner-btn">
          GET IT NOW
        </button>
      </div>
      <MdClose className="banner-close-btn" onClick={this.closeBanner} />
    </div>
  )

  emptyListView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <div className="new-container">
            <img
              alt="no videos"
              className="failure-image"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            />
            <FailureHeading isDarkTheme={isDarkTheme}>
              No Search results found
            </FailureHeading>
            <FailurePara isDarkTheme={isDarkTheme}>
              Try different key words or remove search filter
            </FailurePara>
            <button type="button" className="retry-btn" onClick={this.retry}>
              Retry
            </button>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderVideosList = () => {
    const {videosList} = this.state

    if (videosList.length === 0) {
      return this.emptyListView()
    }
    return (
      <ul className="video-ul-container hidden-scrollbar">
        {videosList.map(eachVideo => (
          <VideoItem videoDetails={eachVideo} key={eachVideo.id} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </div>
  )

  retry = () => {
    this.getVideos()
  }

  renderFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <div className="new-container">
            {isDarkTheme ? (
              <img
                alt="failure"
                className="failure-image"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
              />
            ) : (
              <img
                alt="failure"
                className="failure-image"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
              />
            )}
            <FailureHeading isDarkTheme={isDarkTheme}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailurePara isDarkTheme={isDarkTheme}>
              We are having some trouble to complete your request. Please try
              again.
            </FailurePara>
            <button type="button" className="retry-btn" onClick={this.retry}>
              Retry
            </button>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderVideos = () => {
    const {videosStatus} = this.state

    switch (videosStatus) {
      case apiConstants.success:
        return this.renderVideosList()
      case apiConstants.inProgress:
        return this.renderLoader()
      case apiConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const {displayBanner} = this.state

          return (
            <MainContainer isDarkTheme={isDarkTheme}>
              {displayBanner && <>{this.renderPopup()}</>}
              <InputContainer isDarkTheme={isDarkTheme}>
                <InputElement
                  placeholder="Search"
                  onChange={this.onChangingSearchInput}
                />
                <InputSearchButton
                  type="button"
                  isDarkTheme={isDarkTheme}
                  onClick={this.onClickingSearch}
                >
                  <MdSearch />
                </InputSearchButton>
              </InputContainer>
              {this.renderVideos()}
            </MainContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default HomePage
