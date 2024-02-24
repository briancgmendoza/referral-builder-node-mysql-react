import { PayloadAction, createSlice } from "@reduxjs/toolkit"

import { updateUserProfile } from "./thunk";
import { TRootState, IPayloadAction } from "../types";
import { errorToastMessage, successToastMessage } from "../utils";

const initialState: TRootState = {
  data: null,
  status: "idle",
  error: ""
}

const UpdateUserSlice = createSlice({
  name: "Update User",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateUserProfile.pending, (state) => {
        state.status = "loading"
      })
      .addCase(updateUserProfile.fulfilled, (state, action: PayloadAction<IPayloadAction>) => {
        state.status = "succeeded"
        state.data = action.payload
        successToastMessage(action.payload.message)
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message!
        errorToastMessage(action.error.message)
      })
  }
})

export { updateUserProfile }
export default UpdateUserSlice.reducer