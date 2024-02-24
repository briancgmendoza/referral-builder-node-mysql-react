import { PayloadAction, createSlice } from "@reduxjs/toolkit"

import { getUserById } from "./thunk";
import { TRootState, IPayloadAction } from "../types";

const initialState: TRootState = {
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
      .addCase(getUserById.fulfilled, (state, action: PayloadAction<IPayloadAction>) => {
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