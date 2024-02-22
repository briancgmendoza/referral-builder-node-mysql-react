import { PayloadAction, createSlice } from "@reduxjs/toolkit"

import { TUserProfile } from "../../../Server/types"
import { deleteUser } from "./thunk";

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

const DeleteUserSlice = createSlice({
  name: "Delete User",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteUser.pending, (state) => {
        state.status = "loading"
      })
      .addCase(deleteUser.fulfilled, (state, action: PayloadAction<TUserProfile>) => {
        state.status = "succeeded"
        state.data = action.payload
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message! 
      })
  }
})

export { deleteUser }
export default DeleteUserSlice.reducer