import { combineReducers } from "@reduxjs/toolkit";

import UsersSlice from "./usersSlice";
import UserSlice from "./userSlice";
import UpdateUserSlice from "./updateUserSlice";
import DeleteUserSlice from "./deleteUserSlice";

export const rootReducers = combineReducers({
  users: UsersSlice,
  user: UserSlice,
  updateUserProfile: UpdateUserSlice,
  delete: DeleteUserSlice
})