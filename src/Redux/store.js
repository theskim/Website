import { configureStore } from "@reduxjs/toolkit";

const SideBarReducer = (state = false, action) => {
  switch (action.type) {
    case "SET_SIDEBAR":
      return action.given;
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: {
    sidebar_reducer: SideBarReducer,
  },
});

export default store;
