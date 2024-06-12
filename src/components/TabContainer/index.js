import ThemeContext from '../../context/ThemeContext'

import {
  SideBarContainer,
  ContactUsText,
  ContactUsPara,
} from './styledComponents'

import './index.css'

import TabItem from '../TabItem'
import ActiveTabContext from '../../context/ActiveTabContext'

const tabsList = [
  {
    id: 'home',
    text: 'HOME',
    icon: 'MdHome',
    path: '/',
  },
  {
    id: 'trending',
    text: 'Trending',
    icon: 'FaFire',
    path: '/trending',
  },
  {
    id: 'gaming',
    text: 'Gaming',
    icon: 'FaGamepad',
    path: '/gaming',
  },
  {
    id: 'saved',
    text: 'Saved',
    icon: 'RiPlayListAddFill',
    path: '/saved-videos',
  },
]

const TabContainer = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <SideBarContainer isDarkTheme={isDarkTheme}>
          <ActiveTabContext.Consumer>
            {activeTabValue => {
              const {activeTabId} = activeTabValue

              return (
                <ul className="tabs-container">
                  {tabsList.map(eachTab => (
                    <TabItem
                      key={eachTab.id}
                      tabDetails={eachTab}
                      isActive={activeTabId === eachTab.id}
                    />
                  ))}
                </ul>
              )
            }}
          </ActiveTabContext.Consumer>
          <div className="sidebar-bottom-container">
            <ContactUsText isDarkTheme={isDarkTheme}>CONTACT US</ContactUsText>
            <div>
              <img
                alt="facebook logo"
                className="social-media-logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
              />
              <img
                alt="twitter logo"
                className="social-media-logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
              />
              <img
                alt="linked in logo"
                className="social-media-logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
              />
            </div>
            <ContactUsPara isDarkTheme={isDarkTheme}>
              Enjoy! Now to see your channels and recommendations!
            </ContactUsPara>
          </div>
        </SideBarContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default TabContainer
