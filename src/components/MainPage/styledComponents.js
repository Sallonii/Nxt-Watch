import styled from 'styled-components'

export const SideBarContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#231f20' : '#f1f1f1')};
`
export const ContactUsText = styled.h1`
  color: ${props => (props.isDarkTheme ? 'white' : '#031f44')};
  font-size: 17px;
  margin-bottom: 30px;
`

export const ContactUsPara = styled.p`
  color: ${props => (props.isDarkTheme ? 'white' : '#031f44')};
`
