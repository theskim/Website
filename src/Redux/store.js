import { configureStore } from "@reduxjs/toolkit"

function showSideBar(state = false, action) {
  switch (action.type) {
    case 'SHOW':
      return true;
    case 'UNSHOW':
      return false;
    default:
      return false;
  }
}

export default configureStore({reducer: showSideBar})