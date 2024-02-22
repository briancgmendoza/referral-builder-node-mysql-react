import { PayloadAction, createSlice } from "@reduxjs/toolkit"

import { TUserProfile } from "../../../Server/types"
import { addUser } from "./thunk";

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

const AddUserSlice = createSlice({
  name: "Add User",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addUser.pending, (state) => {
        state.status = "loading"
      })
      .addCase(addUser.fulfilled, (state, action: PayloadAction<TUserProfile>) => {
        state.status = "succeeded"
        state.data = action.payload
      })
      .addCase(addUser.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message! 
      })
  }
})

export { addUser }
export default AddUserSlice.reducer