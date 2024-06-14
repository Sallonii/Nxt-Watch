import {Component} from 'react'

import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {FaFireAlt} from 'react-icons/fa'

import Header from '../Header'
import TabContainer from '../TabContainer'
import Failure from '../Failure'

import ThemeContext from '../../context/ThemeContext'

import {
  TrendingMainContainer,
  TrendingHeadingContainer,
  TrendingIcon,
  TrendingHeading,
  TrendingUlContainer,
  VideoItemContainer,
} from './styledComponents'

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class TrendingPage extends Component {
  state = {trendingStatus: apiConstants.initial, videoList: []}

  componentDidMount() {
    this.getTrendingVideos()
  }

  onSuccess = videoData => {
    const formattedData = videoData.map(eachVid => ({
      id: eachVid.id,
      publishedAt: eachVid.published_at,
      thumbnailUrl: eachVid.thumbnail_url,
      title: eachVid.title,
      viewCount: eachVid.view_count,
      channelName: eachVid.channel.name,
      profileImageUrl: eachVid.channel.profile_image_url,
    }))

    this.setState({
      videoList: formattedData,
      trendingStatus: apiConstants.success,
    })
  }

  getTrendingVideos = async () => {
    this.setState({trendingStatus: apiConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const api = `https://apis.ccbp.in/videos/trending`

    const response = await fetch(api, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSuccess(data.videos)
    }
  }

  retry = () => {
    this.getTrendingVideos()
  }

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </div>
  )

  renderTrendingVideos = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const {videoList} = this.state

        return (
          <TrendingMainContainer>
            <TrendingHeadingContainer>
              <TrendingIcon>
                <FaFireAlt />
              </TrendingIcon>
              <TrendingHeading>Trending</TrendingHeading>
            </TrendingHeadingContainer>
            <TrendingUlContainer>
              {videoList.map(eachVideo => (
                <VideoItemContainer key={eachVideo.id}>
                  <p>{eachVideo.title}</p>
                </VideoItemContainer>
              ))}
            </TrendingUlContainer>
          </TrendingMainContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderTrendingPage = () => {
    const {trendingStatus} = this.state

    switch (trendingStatus) {
      case apiConstants.failure:
        return <Failure retry={this.retry} />
      case apiConstants.inProgress:
        return this.renderLoader()
      case apiConstants.success:
        return this.renderTrendingVideos()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <div className="main-container">
          <TabContainer />
          {this.renderTrendingPage()}
        </div>
      </>
    )
  }
}

export default TrendingPage
