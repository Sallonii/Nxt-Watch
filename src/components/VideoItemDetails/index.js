import {Component} from 'react'

import Cookies from 'js-cookie'

import Header from '../Header'
import TabContainer from '../TabContainer'

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {videoDetails: {}, videoStatus: apiConstants.initial}

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

  renderVideoDetails = () => <p>Yes</p>

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
