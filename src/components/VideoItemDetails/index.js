import {Component} from 'react'

import ReactPlayer from 'react-player'

import {AiOutlineLike} from 'react-icons/ai'
import {BiDislike} from 'react-icons/bi'
import {RiPlayListAddFill} from 'react-icons/ri'

import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'

import Header from '../Header'
import TabContainer from '../TabContainer'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

import {
  VideoContainer,
  Title,
  ViewsAndTime,
  IconContainer,
  Button,
  Icon,
  ButtonText,
  Subscribers,
  Description,
} from './styledComponents'

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
    videoStatus: apiConstants.initial,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  onSuccess = videoDetails => {
    const formattedData = {
      id: videoDetails.id,
      description: videoDetails.description,
      publishedAt: videoDetails.published_at,
      thumbnailUrl: videoDetails.thumbnail_url,
      title: videoDetails.title,
      videoUrl: videoDetails.video_url,
      viewCount: videoDetails.view_count,
      channelName: videoDetails.channel.name,
      profileImageUrl: videoDetails.channel.profile_image_url,
      subscriberCount: videoDetails.channel.subscriber_count,
    }
    this.setState({
      videoDetails: formattedData,
      videoStatus: apiConstants.success,
    })
  }

  getVideoDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const api = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(api, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSuccess(data.video_details)
    }
  }

  renderVideoDetails = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const {videoDetails} = this.state
        const {
          videoUrl,
          title,
          publishedAt,
          viewCount,
          profileImageUrl,
          channelName,
          subscriberCount,
          description,
        } = videoDetails
        const year = formatDistanceToNow(new Date(publishedAt)).split(' ')[1]

        return (
          <VideoContainer isDarkTheme={isDarkTheme}>
            <ReactPlayer url={videoUrl} width="100%" />
            <Title isDarkTheme={isDarkTheme}>{title}</Title>
            <div className="view-count-options-container">
              <ViewsAndTime>{`${viewCount} views . ${year} years ago`}</ViewsAndTime>
              <IconContainer>
                <Button type="button">
                  <Icon>
                    <AiOutlineLike />
                  </Icon>
                  <ButtonText>Like</ButtonText>
                </Button>
                <Button type="button">
                  <Icon>
                    <BiDislike />
                  </Icon>
                  <ButtonText>Dislike</ButtonText>
                </Button>
                <Button type="button">
                  <Icon>
                    <RiPlayListAddFill />
                  </Icon>
                  <ButtonText>Save</ButtonText>
                </Button>
              </IconContainer>
            </div>
            <hr />
            <div className="video-details-container-description">
              <img
                className="channel-logo"
                alt="channel logo"
                src={profileImageUrl}
              />
              <div>
                <Title isDarkTheme={isDarkTheme}>{channelName}</Title>
                <Subscribers>{`${subscriberCount} subscribers`}</Subscribers>
                <Description isDarkTheme={isDarkTheme}>
                  {description}
                </Description>
              </div>
            </div>
          </VideoContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderVideo = () => {
    const {videoStatus} = this.state

    switch (videoStatus) {
      case apiConstants.success:
        return this.renderVideoDetails()
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
          {this.renderVideo()}
        </div>
      </>
    )
  }
}

export default VideoItemDetails
