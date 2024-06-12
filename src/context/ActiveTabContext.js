import React from 'react'

const ActiveTabContext = React.createContext({
  activeTabId: 'home',
  updateActiveTabId: () => {},
})

export default ActiveTabContext
