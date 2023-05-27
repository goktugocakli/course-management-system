import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:8080";

const initialState = {
  user:
    sessionStorage.getItem("user") === null ||
    sessionStorage.getItem("user") === "null"
      ? null
      : JSON.parse(sessionStorage.getItem("user")), // TODO: add user details to localStorage and fetch them when app refreshes
  status:
    sessionStorage.getItem("user") === null ||
    sessionStorage.getItem("user") === "null"
      ? "idle"
      : "done", //idle, loading, error, done // Also fetch the state of the app it is usually be 'done'
  error: null,
};

export const fetchUser = createAsyncThunk(
  "/users",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(BASE_URL + "/login", data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: {
      reducer: (state, action) => {
        //Never forget to return
        return (state = action.payload);
      },
      prepare: (user) => {
        const userr = {
          userType: "instructor",
          data: {},
        };

        return {
          payload: {
            user: userr,
            status: "done",
            error: null,
          },
        };
      },
    },

    logout: {
      reducer: (state, action) => {
        sessionStorage.setItem("user", null);
        return (state = action.payload);
      },

      prepare: () => {
        return {
          payload: {
            user: null,
            status: "idle",
            error: null,
          },
        };
      },
    },
  },

  extraReducers(builder) {
    builder
      .addCase(fetchUser.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = "done";
        var userr = {
          userType: action.payload.type,
          data: action.payload.data,
        };

        state.user = userr;
        sessionStorage.setItem("user", JSON.stringify(userr));
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export const user = (state) => state.user;

export const { login, logout } = UserSlice.actions;

export default UserSlice.reducer;
