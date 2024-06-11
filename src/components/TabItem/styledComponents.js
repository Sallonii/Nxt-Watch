import styled from 'styled-components'

export const SideBarTab = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  cursor: pointer;
  padding: 2px;
  border: none;
  background-color: ${props => {
    if (props.isActive && props.isDarkTheme) {
      return '#7e858e'
    }
    if (props.isActive && !props.isDarkTheme) {
      return '#d7dfe9'
    }
    if (!props.isActive && props.isDarkTheme) {
      return '#231f20'
    }
    return '#f1f1f1'
  }};
`

export const SideBarText = styled.p`
  margin-left: 20px;
  font-weight: ${props => (props.isActive ? 600 : '')};
  color: ${props => {
    if (props.isActive && props.isDarkTheme) {
      return 'white'
    }
    if (props.isActive && !props.isDarkTheme) {
      return '#231f20'
    }
    if (!props.isActive && props.isDarkTheme) {
      return 'white'
    }
    return '#231f20'
  }};
`

export const SideBarIconContainer = styled.div`
  color: ${props => {
    if (props.isActive) {
      return 'red'
    }
    if (props.isActive && !props.isDarkTheme) {
      return '#231f20'
    }
    if (!props.isActive && props.isDarkTheme) {
      return 'white'
    }
    return '#231f20'
  }};
  font-size: 25px;
  margin-left: 10px;
`
