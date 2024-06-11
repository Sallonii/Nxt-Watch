import {MdHome} from 'react-icons/md'
import {FaFire, FaGamepad} from 'react-icons/fa'
import {RiPlayListAddFill} from 'react-icons/ri'

import {SideBarTab, SideBarIconContainer, SideBarText} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

// Create a mapping of icon names to icon components
const iconMap = {
  MdHome,
  FaFire,
  FaGamepad,
  RiPlayListAddFill,
}

const TabItem = props => {
  const {tabDetails, isActive, updateId} = props
  const {id, text, icon} = tabDetails

  // Fetched the Icon component from the iconMap
  const IconComponent = iconMap[icon]

  const changeActiveId = () => {
    updateId(id)
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <SideBarTab
            onClick={changeActiveId}
            isActive={isActive}
            isDarkTheme={isDarkTheme}
          >
            <SideBarIconContainer isActive={isActive} isDarkTheme={isDarkTheme}>
              {/* Render the IconComponent if it exists */}
              {IconComponent && <IconComponent />}
            </SideBarIconContainer>
            <SideBarText isActive={isActive} isDarkTheme={isDarkTheme}>
              {text}
            </SideBarText>
          </SideBarTab>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default TabItem
