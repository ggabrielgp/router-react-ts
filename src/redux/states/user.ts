import { createSlice } from "@reduxjs/toolkit";
import { Roles, UserInfo } from "../../models";
import { persistLocalStorage, clearLocalStorage } from "../../utilities";

export const EmptyUserState: UserInfo = {
  id: 0,
  name: "",
  email: "",
  rol: Roles.USER
}

export const UserKey = "user";

export const userSlice = createSlice({
  name: UserKey,
  initialState: localStorage.getItem(UserKey) ? JSON.parse(localStorage.getItem(UserKey) as string) : EmptyUserState,
  reducers: {
    createUser: (state, action) => {
      persistLocalStorage<UserInfo>(UserKey, action.payload);
      return action.payload
    },
    updateUser: (state, action) => {
      const result = { ...state, ...action.payload };
      persistLocalStorage<UserInfo>(UserKey, result);
      return result;
    },
    resetUser: () => {
      clearLocalStorage(UserKey)
      return EmptyUserState
    }
  }
});

export const { createUser, updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;