import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? 'black' : 'transparent')};
  width: 80%;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`

export const InputContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? 'black' : 'transparent')};
  border-style: solid;
  width: 360px;
  height: 40px;
  margin: 10px;
  border-color: ${props => (props.isDarkTheme ? 'white' : '#f1f1f1')};

  display: flex;
`
export const InputElement = styled.input`
  border: none;
  height: 100%;
  width: 100%;
  outline: none;
  font-size: 15px;
  color: #909090;
  background-color: transparent;
`
export const InputSearchButton = styled.button`
  font-size: 25px;
  width: 80px;
  color: #909090;
  border: none;
  cursor: pointer;
  background-color: ${props => (props.isDarkTheme ? '#231f20' : '#f1f1f1')};
`

export const FailureHeading = styled.h1`
  font-size: 20px;
  color: ${props => (props.isDarkTheme ? 'white' : 'black')};
`

export const FailurePara = styled.p`
  font-size: 10px;
  color: ${props => (props.isDarkTheme ? 'white' : 'black')};
`
