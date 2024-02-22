import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import { putRequest } from "../service/request"
import { TUserProfile } from "../../../Server/types"
import { FormData } from "../components/form"

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

const updateUserProfile = createAsyncThunk<TUserProfile, { id: number; formData: FormData }, { rejectValue: string }>(
  "data/updateUserProfile",
  async ({ id, formData }, thunkAPI) => {

    try {
      const response = await putRequest(`/update-user/${id}`, formData);
      return response;
    } catch (error) {
      console.log("Error in FE [app.put(/update-user/:userId)]", error);
      return thunkAPI.rejectWithValue("Error in updating user profile");
    }
  }
);

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