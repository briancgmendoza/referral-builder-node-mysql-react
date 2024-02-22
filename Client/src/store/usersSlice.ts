import { PayloadAction, createSlice } from "@reduxjs/toolkit"

import { TUserProfile } from "../../../Server/types"
import { getUsers } from "./thunk";

type RootState = {
  data: TUserProfile[];
  status: string;
  error: string;
}

const initialState: RootState = {
  data: [],
  status: "idle",
  error: ""
}

const UsersSlice = createSlice({
  name: "Users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.status = "loading"
      })
      .addCase(getUsers.fulfilled, (state, action: PayloadAction<TUserProfile[]>) => {
        state.status = "succeeded"
        state.data = action.payload
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message! 
      })
  }
})

export { getUsers }
export default UsersSlice.reducer