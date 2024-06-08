import styled from 'styled-components'

export const LoginCardContainer = styled.form`
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.3);
  height: 400px;
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  color: #94a3b8;
  font-weight: 600;
  background-color: ${props => (props.isDarkTheme ? 'black' : 'white')};
`
export const LoginMainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#181818' : 'white')};
`
