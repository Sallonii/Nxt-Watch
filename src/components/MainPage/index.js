import {Component} from 'react'

import Header from '../Header'

import {
  SideBarContainer,
  ContactUsText,
  ContactUsPara,
} from './styledComponents'

import './index.css'
import TabItem from '../TabItem'
import HomePage from '../HomePage'
import TrendingPage from '../TrendingPage'

import ThemeContext from '../../context/ThemeContext'

const tabsList = [
  {
    id: 'home',
    text: 'HOME',
    icon: 'MdHome',
  },
  {
    id: 'trending',
    text: 'Trending',
    icon: 'FaFire',
  },
  {
    id: 'gaming',
    text: 'Gaming',
    icon: 'FaGamepad',
  },
  {
    id: 'saved',
    text: 'Saved',
    icon: 'RiPlayListAddFill',
  },
]

const componentsMap = {
  home: HomePage,
  trending: TrendingPage,
}

class MainPage extends Component {
  state = {activeTabId: tabsList[0].id}

  updateId = id => {
    this.setState({activeTabId: id})
  }

  renderTabContainer = () => {
    const {activeTabId} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <SideBarContainer
              className="sidebar-container desktop-view"
              isDarkTheme={isDarkTheme}
            >
              <ul className="tabs-container">
                {tabsList.map(eachTab => (
                  <TabItem
                    key={eachTab.id}
                    tabDetails={eachTab}
                    isActive={activeTabId === eachTab.id}
                    updateId={this.updateId}
                  />
                ))}
              </ul>
              <div className="sidebar-bottom-container">
                <ContactUsText isDarkTheme={isDarkTheme}>
                  CONTACT US
                </ContactUsText>
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
  }

  render() {
    const {activeTabId} = this.state
    const ActiveComponent = componentsMap[activeTabId]
    return (
      <>
        <Header />
        <div className="main-container">
          {this.renderTabContainer()}
          <ActiveComponent />
        </div>
      </>
    )
  }
}

export default MainPage
