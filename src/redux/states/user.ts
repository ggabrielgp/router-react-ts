import { createSlice } from "@reduxjs/toolkit";
import { UserInfo } from "../../models";

export const EmptyUserState: UserInfo = {
  id: 0,
  name: "",
  email: ""
}

export const persistLocalStorageUser = (userInfo: UserInfo) => {
  localStorage.setItem('user', JSON.stringify({ ...userInfo }));
}

export const clearLocalStorageUser = () => {
  localStorage.removeItem('user');
}

export const userSlice = createSlice({
  name: "user",
  initialState: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) : EmptyUserState,
  reducers: {
    createUser: (state, action) => {
      persistLocalStorageUser(action.payload);
      return action.payload
    },
    updateUser: (state, action) => {
      const result = { ...state, ...action.payload };
      persistLocalStorageUser(result);
      return result;
    },
    resetUser: () => {
      clearLocalStorageUser()
      return EmptyUserState
    }
  }
});

export const { createUser, updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;