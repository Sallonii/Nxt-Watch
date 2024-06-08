import styled from 'styled-components'

export const HeaderMainContainer = styled.div`
  height: 10vh;
  background-color: ${props => (props.isDarkTheme ? 'black' : 'white')};
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ReactIcon = styled.button`
  font-size: 25px;
  cursor: pointer;
  color: ${props => (props.isDarkTheme ? 'white' : 'black')};
  background-color: transparent;
  border: none;
`
export const LogoutButton = styled.button`
  color: ${props => (props.isDarkTheme ? 'white' : '#4f46e5')};
  border-color: ${props => (props.isDarkTheme ? 'white' : '#4f46e5')};
  border-radius: 5px;
  background-color: transparent;
  cursor: pointer;
`
