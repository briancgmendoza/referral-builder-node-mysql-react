import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import { getRequest } from "../service/request"
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

const getUserById = createAsyncThunk<TUserProfile, number, { rejectValue: string }>("data/getUserById", async(id, thunkAPI) => {
  try {
    const response = await getRequest(`/user/${id}`)
    return response
  } catch (error) {
    console.log("Error in FE [app.get(/user/:userId)]", error)
    return thunkAPI.rejectWithValue("Error in fetching user profile")
  }
})

const UserSlice = createSlice({
  name: "User",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserById.pending, (state) => {
        state.status = "loading"
      })
      .addCase(getUserById.fulfilled, (state, action: PayloadAction<TUserProfile>) => {
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