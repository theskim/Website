import { configureStore } from "@reduxjs/toolkit"

const SideBarReducer = (state = false, action) => {
  switch (action.type) {
    case 'SET_SIDEBAR':
      return action.given;
    default:
      return false;
  }
}

const NavBarReducer = (state = true, action) => {
  switch (action.type) {
    case 'SET_NAVBAR':
      return action.given;
    default:
      return true;
  }
}

export default configureStore({
  reducer: {
    sidebar_reducer: SideBarReducer, 
    navbar_reducer: NavBarReducer
  }
});