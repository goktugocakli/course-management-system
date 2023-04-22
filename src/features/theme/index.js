import { createSlice } from "@reduxjs/toolkit";

const localTheme = localStorage.getItem("Theme") !== "false";

// if localStorage.getItem("Theme") is null or true it will return true;
// otherwise it will return false
// localTheme true means white theme and false means dark theme

const initialState = {
  theme: localTheme,
};

const ThemeSlice = createSlice({
  name: "changeTheme",
  initialState,
  reducers: {
    changeTheme: {
      reducer: (state, action) => {
        state.theme = action.payload.theme;
      },

      prepare: (white) => {
        return {
          payload: {
            theme: white,
          },
        };
      },
    },
  },
});

export const ThemeState = (state) => state.changeTheme; //return the theme state as {theme: boolean}

export const { changeTheme } = ThemeSlice.actions;

export default ThemeSlice.reducer;
