import styled from 'styled-components'

export const VideoListContainer = styled.li`
  list-style-type: none;
  width: 350px;
  margin: 10px;
  @media screen and (min-width: 430px) and (max-width: 930px) {
    width: 500px;
  }
`
export const ThumbNail = styled.img`
  height: 200px;
  width: 100%;
`
export const Title = styled.h1`
  font-size: 15px;
  color: ${props => (props.isDarkTheme ? 'white' : 'black')};
`
export const ChannelName = styled.p`
  margin: 0;
  padding: 0;
  color: #7e858e;
  color: ${props => (props.isDarkTheme ? 'white' : 'black')};
`
export const ViewsAndTime = styled.p`
  color: ${props => (props.isDarkTheme ? 'white' : 'black')};
`
