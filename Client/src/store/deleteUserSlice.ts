import { PayloadAction, createSlice } from "@reduxjs/toolkit"

import { deleteUser } from "./thunk";
import { TRootState, IPayloadAction } from "../types";
import { errorToastMessage, successToastMessage } from "../utils";

const initialState: TRootState = {
  data: null,
  status: "idle",
  error: ""
}

const DeleteUserSlice = createSlice({
  name: "Delete User",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteUser.pending, (state) => {
        state.status = "loading"
      })
      .addCase(deleteUser.fulfilled, (state, action: PayloadAction<IPayloadAction>) => {
        state.status = "succeeded"
        state.data = action.payload
        successToastMessage(action.payload.message)
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message!
        errorToastMessage(action.error.message)
      })
  }
})

export { deleteUser }
export default DeleteUserSlice.reducer