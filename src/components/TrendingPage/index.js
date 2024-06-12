import {Component} from 'react'

import Header from '../Header'
import TabContainer from '../TabContainer'

class TrendingPage extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="main-container">
          <TabContainer />
        </div>
      </>
    )
  }
}

export default TrendingPage
