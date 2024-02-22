import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import { getRequest } from "../service/request"
import { TUserProfile } from "../../../Server/types"

type RootState = {
  data: TUserProfile[];
  status: string;
  error: string;
}

const initialState: RootState = {
  data: [],
  status: "idle",
  error: ""
}

const getUsers = createAsyncThunk<TUserProfile[], void, { rejectValue: string }>("data/getUsers", async(_, thunkAPI) => {
  try {
    const response = await getRequest("/users")
    return response
  } catch (error) {
    console.log("Error in FE [app.get(/users)]", error)
    return thunkAPI.rejectWithValue("Error in fetching users")
  }
})

const UsersSlice = createSlice({
  name: "Users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.status = "loading"
      })
      .addCase(getUsers.fulfilled, (state, action: PayloadAction<TUserProfile[]>) => {
        state.status = "succeeded"
        state.data = action.payload
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message! 
      })
  }
})

export { getUsers }
export default UsersSlice.reducer