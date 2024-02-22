import { PayloadAction, createSlice } from "@reduxjs/toolkit"

import { TUserProfile } from "../../../Server/types"
import { getUserById } from "./thunk";

type RootState = {
  data: TUserProfile | null;
  status: string;
  error: string;
}

const initialState: RootState = {
  data: null,
  status: "idle",
  error: ""
}

const UserSlice = createSlice({
  name: "User",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserById.pending, (state) => {
        state.status = "loading"
      })
      .addCase(getUserById.fulfilled, (state, action: PayloadAction<TUserProfile>) => {
        state.status = "succeeded"
        state.data = action.payload
      })
      .addCase(getUserById.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message! 
      })
  }
})

export { getUserById }
export default UserSlice.reducer