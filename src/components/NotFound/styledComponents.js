import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
  width: 100%;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : 'white')};
`
export const NotFoundImage = styled.img`
  height: 30vh;
`
export const NotFoundHeading = styled.h1`
  color: ${props => (props.isDarkTheme ? 'white' : '#0f0f0f')};
`

export const NotFoundPara = styled.p`
  color: ${props => (props.isDarkTheme ? 'white' : '#0f0f0f')};
`
