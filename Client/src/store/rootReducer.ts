import { combineReducers } from "@reduxjs/toolkit";

import UsersSlice from "./usersSlice";
import UserSlice from "./userSlice";
import AddUserSlice from "./addUserSlice";
import UpdateUserSlice from "./updateUserSlice";
import DeleteUserSlice from "./deleteUserSlice";

export const rootReducers = combineReducers({
  users: UsersSlice,
  user: UserSlice,
  addedUser: AddUserSlice,
  updateUserProfile: UpdateUserSlice,
  delete: DeleteUserSlice
})