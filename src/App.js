import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import './App.css'

import LoginForm from './components/LoginForm'
import MainPage from './components/MainPage'
import TrendingPage from './components/TrendingPage'

import ThemeContext from './context/ThemeContext'
import ActiveTabContext from './context/ActiveTabContext'
import ProtectedRoute from './components/ProtectedRoute'
import VideoItemDetails from './components/VideoItemDetails'

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

// Replace your code here
class App extends Component {
  state = {isDarkTheme: false, activeTabId: tabsList[0].id}

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  updateActiveTabId = id => {
    this.setState({activeTabId: id})
  }

  render() {
    const {isDarkTheme, activeTabId} = this.state
    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          toggleTheme: this.toggleTheme,
        }}
      >
        <ActiveTabContext.Provider
          value={{
            activeTabId,
            updateActiveTabId: this.updateActiveTabId,
          }}
        >
          <Switch>
            <Route exact path="/login" component={LoginForm} />
            <ProtectedRoute exact path="/" component={MainPage} />
            <ProtectedRoute exact path="/trending" component={TrendingPage} />
            <ProtectedRoute
              exact
              path="/videos/:id"
              component={VideoItemDetails}
            />
          </Switch>
        </ActiveTabContext.Provider>
      </ThemeContext.Provider>
    )
  }
}

export default App
