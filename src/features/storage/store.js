import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "../theme";

const store = configureStore({
  reducer: {
    changeTheme: themeReducer,
  },
});

export default store;
