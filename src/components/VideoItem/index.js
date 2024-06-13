import {formatDistanceToNow} from 'date-fns'

import {Link} from 'react-router-dom'

import {
  VideoListContainer,
  ThumbNail,
  Title,
  ChannelName,
  ViewsAndTime,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const VideoItem = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    channel,
    publishedAt,
  } = videoDetails

  const year = formatDistanceToNow(new Date(publishedAt)).split(' ')[1]
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <Link to={`/videos/${id}`} className="nav-item">
            <VideoListContainer>
              <ThumbNail alt="video thumbnail" src={thumbnailUrl} />
              <div className="video-description">
                <img
                  className="channel-logo"
                  alt="channel logo"
                  src={channel.profileImageUrl}
                />
                <div>
                  <Title isDarkTheme={isDarkTheme}>{title}</Title>
                  <ChannelName isDarkTheme={isDarkTheme}>
                    {channel.name}
                  </ChannelName>
                  <ViewsAndTime
                    isDarkTheme={isDarkTheme}
                  >{`${viewCount} views . ${year} years ago`}</ViewsAndTime>
                </div>
              </div>
            </VideoListContainer>
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default VideoItem
