import {Component} from 'react'

import Header from '../Header'

import './index.css'
import HomePage from '../HomePage'
import TabContainer from '../TabContainer'

class MainPage extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="main-container">
          <TabContainer />
          <HomePage />
        </div>
      </>
    )
  }
}

export default MainPage
