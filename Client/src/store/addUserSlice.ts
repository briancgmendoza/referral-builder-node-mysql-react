import { PayloadAction, createSlice } from "@reduxjs/toolkit"

import { addUser } from "./thunk";
import { TRootState, IPayloadAction } from "../types";
import { errorToastMessage, successToastMessage } from "../utils";

const initialState: TRootState = {
  data: null,
  status: "idle",
  error: ""
}

const AddUserSlice = createSlice({
  name: "Add User",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addUser.pending, (state) => {
        state.status = "loading"
      })
      .addCase(addUser.fulfilled, (state, action: PayloadAction<IPayloadAction>) => {
        state.status = "succeeded"
        state.data = action.payload
        successToastMessage(action.payload.message)
      })
      .addCase(addUser.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message!
        errorToastMessage(action.error.message)
      })
  }
})

export { addUser }
export default AddUserSlice.reducer