import React from 'react'

const SavedVideoContext = React.createContext({
  isSaved: false,
  savedVideoList: [],
  updateIsSaved: () => {},
  addVideosToSaved: () => {},
  deleteVideosFromSaved: () => {},
})

export default SavedVideoContext
