import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import { postRequest } from "../service/request"
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

const addUser = createAsyncThunk<TUserProfile, unknown, { rejectValue: string }>("data/addUser", async(body, thunkAPI) => {
  try {
    const response = await postRequest('/add-user', body)
    return response
  } catch (error) {
    console.log("Error in FE [app.delete(/user/:userId)]", error)
    return thunkAPI.rejectWithValue("Error in deleting user profile")
  }
})

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