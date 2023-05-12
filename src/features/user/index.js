import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  status: "idle", //idle, loading, error, done
  error: null,
};

const BASE_URL = "http://localhost:8080";

export const fetchUser = createAsyncThunk("/users", async (data) => {
  try {
    const response = await axios.post(BASE_URL + "/login", data);

    return response.data;
  } catch (err) {
    return err.message;
  }
});

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
        //TODO: fetch user
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
