import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import './App.css'

import LoginForm from './components/LoginForm'
import MainPage from './components/MainPage'
import TrendingPage from './components/TrendingPage'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'

import ThemeContext from './context/ThemeContext'
import ActiveTabContext from './context/ActiveTabContext'
import SavedVideoContext from './context/SavedVideoContext'

import ProtectedRoute from './components/ProtectedRoute'

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
  state = {
    isDarkTheme: false,
    activeTabId: tabsList[0].id,
    isSaved: false,
    savedVideoList: [],
  }

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  updateActiveTabId = id => {
    this.setState({activeTabId: id})
  }

  addVideosToSaved = videoDetails => {
    this.setState(prevState => ({
      savedVideoList: [...prevState.savedVideoList, videoDetails],
    }))
  }

  deleteVideosFromSaved = videoDetails => {
    const {savedVideoList} = this.state
    const updatedVideoList = savedVideoList.filter(
      eachVideo => eachVideo.id !== videoDetails.id,
    )
    this.setState({savedVideoList: updatedVideoList})
  }

  updateSavedVideosList = videoDetails => {
    const {isSaved} = this.state
    if (isSaved) {
      this.deleteVideosFromSaved(videoDetails)
    } else {
      this.addVideosToSaved(videoDetails)
    }
  }

  updateIsSaved = videoDetails => {
    this.setState(prevState => ({isSaved: !prevState.isSaved}))
    this.updateSavedVideosList(videoDetails)
  }

  render() {
    const {isDarkTheme, activeTabId, isSaved, savedVideoList} = this.state
    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          toggleTheme: this.toggleTheme,
        }}
      >
        <SavedVideoContext.Provider
          value={{
            isSaved,
            savedVideoList,
            updateIsSaved: this.updateIsSaved,
            addVideosToSaved: this.addVideosToSaved,
            deleteVideosFromSaved: this.deleteVideosFromSaved,
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
              <Route path="/not-found" component={NotFound} />
              <Redirect to="not-found" />
            </Switch>
          </ActiveTabContext.Provider>
        </SavedVideoContext.Provider>
      </ThemeContext.Provider>
    )
  }
}

export default App
