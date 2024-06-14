import styled from 'styled-components'

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 90vh;
`

export const FailureHeading = styled.h1`
  font-size: 20px;
  color: ${props => (props.isDarkTheme ? 'white' : 'black')};
`

export const FailurePara = styled.p`
  font-size: 10px;
  color: ${props => (props.isDarkTheme ? 'white' : 'black')};
`
