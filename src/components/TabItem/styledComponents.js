import styled from 'styled-components'

export const SideBarTab = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  cursor: pointer;
  background-color: ${props => (props.isActive ? '#d7dfe9' : 'transparent')};
`

export const SideBarText = styled.p`
  margin-left: 20px;
  font-weight: ${props => (props.isActive ? 600 : '')};
`

export const SideBarIconContainer = styled.div`
  color: ${props => (props.isActive ? '#ff0000' : '')};
  font-size: 25px;
  margin-left: 10px;
`
