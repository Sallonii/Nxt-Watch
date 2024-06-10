import {Component} from 'react'

import {MdClose} from 'react-icons/md'

import Header from '../Header'

import {MainContainer} from './styledComponents'

import './index.css'
import TabItem from '../TabItem'

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

class Home extends Component {
  state = {activeTabId: tabsList[0].id, displayBanner: true}

  updateId = id => {
    this.setState({activeTabId: id})
  }

  closeBanner = () => {
    this.setState({displayBanner: false})
  }

  renderPopup = () => (
    <div className="banner-container">
      <div>
        <img
          alt="website logo"
          className="website-logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        />
        <h1 className="banner-heading">
          Buy NxtWatch Premium prepaid plans with UPI
        </h1>
        <button type="button" className="banner-btn">
          GET IT NOW
        </button>
      </div>
      <MdClose className="banner-close-btn" onClick={this.closeBanner} />
    </div>
  )

  render() {
    const {activeTabId, displayBanner} = this.state
    return (
      <>
        <Header />
        <div className="main-container">
          <div className="sidebar-container desktop-view">
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
              <h1 className="contact-us-heading">CONTACT US</h1>
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
              <p className="contact-us-section-text">
                Enjoy! Now to see your channels and recommendations!
              </p>
            </div>
          </div>
          <MainContainer>
            {displayBanner && <>{this.renderPopup()}</>}
          </MainContainer>
        </div>
      </>
    )
  }
}

export default Home
