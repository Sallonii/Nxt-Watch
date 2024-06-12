import {MdHome} from 'react-icons/md'
import {FaFire, FaGamepad} from 'react-icons/fa'
import {RiPlayListAddFill} from 'react-icons/ri'

import {Link} from 'react-router-dom'

import {SideBarTab, SideBarIconContainer, SideBarText} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

import './index.css'
import ActiveTabContext from '../../context/ActiveTabContext'

// Create a mapping of icon names to icon components
const iconMap = {
  MdHome,
  FaFire,
  FaGamepad,
  RiPlayListAddFill,
}

const TabItem = props => {
  const {tabDetails, isActive} = props
  const {id, text, icon, path} = tabDetails

  // Fetched the Icon component from the iconMap
  const IconComponent = iconMap[icon]

  const menulist = value => {
    const {isDarkTheme} = value

    return (
      <ActiveTabContext.Consumer>
        {activeTabValue => {
          const {updateActiveTabId} = activeTabValue

          const changeActiveId = () => {
            updateActiveTabId(id)
          }

          return (
            <Link to={path} className="nav-item">
              <SideBarTab
                onClick={changeActiveId}
                isActive={isActive}
                isDarkTheme={isDarkTheme}
              >
                <SideBarIconContainer
                  isActive={isActive}
                  isDarkTheme={isDarkTheme}
                >
                  {/* Render the IconComponent if it exists */}
                  {IconComponent && <IconComponent />}
                </SideBarIconContainer>
                <SideBarText isActive={isActive} isDarkTheme={isDarkTheme}>
                  {text}
                </SideBarText>
              </SideBarTab>
            </Link>
          )
        }}
      </ActiveTabContext.Consumer>
    )
  }

  return (
    <ThemeContext.Consumer>{value => menulist(value)}</ThemeContext.Consumer>
  )
}

export default TabItem
