import styled from 'styled-components'

export const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
  padding: 10px;
  background-color: ${props => (props.isDarkTheme ? 'black' : 'transparent')};
`
export const Title = styled.h1`
  font-size: 20px;
  padding: 0px;
  margin: 0px;
  color: ${props => (props.isDarkTheme ? 'white' : 'black')};
`
export const ViewsAndTime = styled.p`
  color: #7e858e;
`

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  border: none;
  width: 90px;
  margin: 5px;
  cursor: pointer;
  color: #7e858e;
`
export const Icon = styled.div`
  font-size: 30px;
`
export const ButtonText = styled.p``

export const Subscribers = styled.p`
  margin: 0;
  padding: 0;
  color: #7e858e;
`
export const Description = styled.p`
  color: ${props => (props.isDarkTheme ? 'white' : 'black')};
`
