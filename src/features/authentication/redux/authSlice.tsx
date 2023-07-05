import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosInstance } from "axios";
import { toast } from "react-toastify";

const authInstance: AxiosInstance = axios.create({
  baseURL: "http://localhost:4000/api/auth",
});

interface AuthState {
  token: any;
  isLoading: boolean | null;
  isAuthenticated: boolean | null;
  userData: any;
  error: any;
}

export const registerAdmin = createAsyncThunk(
  "auth/register",
  async (userData: any, { rejectWithValue }) => {
    try {
      const response = await authInstance.post("/register", userData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error: any) {
      const errorMessages = error?.response?.data?.errors?.map(
        (err: any) => err.msg
      );
      toast.error(errorMessages?.join("\n"));
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (userData: any, { rejectWithValue }) => {
    try {
      const response = await authInstance.post("/", userData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error: any) {
      const errorMessages = error?.response?.data?.errors?.map(
        (err: any) => err.msg
      );
      toast.error(errorMessages?.join("\n"));
      return rejectWithValue(error.response.data);
    }
  }
);

export const getAuthenticatedUser = createAsyncThunk(
  "auth/get_authenticated_user",
  async (_, { rejectWithValue }) => {
    try {
      const response = await authInstance.get("/", {
        headers: {
          Authorize: localStorage.getItem("auth_token"),
        },
      });
      return response.data;
    } catch (error: any) {
      const errorMessages = error?.response?.data?.errors?.map(
        (err: any) => err.msg
      );
      toast.error(errorMessages?.join("\n"));
      return rejectWithValue(error.response.data);
    }
  }
);

export const requestPasswordChange = createAsyncThunk(
  "auth/request_password_change",
  async (userData: any, { rejectWithValue }) => {
    try {
      const response = await authInstance.post("/password", userData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error: any) {
      const errorMessages = error?.response?.data?.errors?.map(
        (err: any) => err.msg
      );
      toast.error(errorMessages?.join("\n"));
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  token: localStorage.getItem("auth_token"),
  isLoading: false,
  isAuthenticated: false,
  error: null,
  userData: null,
} as AuthState;

const authPending = (state: AuthState) => {
  state.isLoading = true;
  state.error = null;
  state.userData = null;
  state.isAuthenticated = false;
};

const authRejected = (state: AuthState, action: any) => {
  localStorage.removeItem("auth_token");
  state.isLoading = false;
  state.error = action.payload;
  state.isAuthenticated = false;
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser(state: AuthState) {
      localStorage.removeItem("auth_token");
      state.isLoading = false;
      state.error = null;
      state.isAuthenticated = false;
      state.userData = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerAdmin.pending, authPending)
      .addCase(loginUser.pending, authPending)
      .addCase(getAuthenticatedUser.pending, authPending)
      .addCase(requestPasswordChange.pending, authPending)
      .addCase(registerAdmin.rejected, authRejected)
      .addCase(loginUser.rejected, authRejected)
      .addCase(getAuthenticatedUser.rejected, authRejected)
      .addCase(requestPasswordChange.rejected, authRejected)
      .addCase(registerAdmin.fulfilled, (state: AuthState, { payload }) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.userData = null;
        state.error = null;
        localStorage.setItem("auth_token", payload.token);
      })
      .addCase(loginUser.fulfilled, (state: AuthState, { payload }) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.userData = null;
        state.error = null;
        localStorage.setItem("auth_token", payload.token);
      })
      .addCase(
        getAuthenticatedUser.fulfilled,
        (state: AuthState, { payload }) => {
          state.isLoading = false;
          state.isAuthenticated = true;
          state.userData = payload;
          state.error = null;
          state.token = localStorage.getItem("auth_token");
        }
      )
      .addCase(
        requestPasswordChange.fulfilled,
        (state: AuthState, { payload }) => {
          state.isLoading = false;
          state.isAuthenticated = false;
          state.userData = false;
          state.error = null;
          state.token = localStorage.getItem("auth_token");
        }
      )
      .addDefaultCase((state: AuthState) => {
        state.token = localStorage.getItem("auth_token");
        state.isLoading = false;
        state.isAuthenticated = false;
        state.error = null;
        state.userData = null;
      });
  },
});

export const { logoutUser } = authSlice.actions;

export default authSlice.reducer;
