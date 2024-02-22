import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import { deleteRequest } from "../service/request"
import { TUserProfile } from "../../../Server/types"

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

const deleteUser = createAsyncThunk<TUserProfile, number, { rejectValue: string }>("data/deleteUser", async(id, thunkAPI) => {
  try {
    const response = await deleteRequest(`/user/${id}`)
    return response
  } catch (error) {
    console.log("Error in FE [app.delete(/user/:userId)]", error)
    return thunkAPI.rejectWithValue("Error in deleting user profile")
  }
})

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