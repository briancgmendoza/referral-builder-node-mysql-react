import { PayloadAction, createSlice } from "@reduxjs/toolkit"

import { TUserProfile } from "../../../Server/types"
import { updateUserProfile } from "./thunk";

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

const UpdateUserSlice = createSlice({
  name: "Update User",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateUserProfile.pending, (state) => {
        state.status = "loading"
      })
      .addCase(updateUserProfile.fulfilled, (state, action: PayloadAction<TUserProfile>) => {
        state.status = "succeeded"
        state.data = action.payload
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message! 
      })
  }
})

export { updateUserProfile }
export default UpdateUserSlice.reducer