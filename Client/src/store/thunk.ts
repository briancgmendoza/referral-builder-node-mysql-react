import { createAsyncThunk } from "@reduxjs/toolkit"

import { deleteRequest, getRequest, postRequest, putRequest } from "../service/request"
import { TUserProfile } from "../../../Server/types"
import { FormData } from "../components/form"

export const getUsers = createAsyncThunk<TUserProfile[], void, { rejectValue: string }>(
  "data/getUsers", async (_, thunkAPI) => {
    try {
      const response = await getRequest("/users")
      return response
    } catch (error) {
      console.log("Error in FE [app.get(/users)]", error)
      return thunkAPI.rejectWithValue("Error in fetching users")
    }
})

export const getUserById = createAsyncThunk<TUserProfile, number, { rejectValue: string }>(
  "data/getUserById", async (id, thunkAPI) => {
    try {
      const response = await getRequest(`/user/${id}`)
      return response
    } catch (error) {
      console.log("Error in FE [app.get(/user/:userId)]", error)
      return thunkAPI.rejectWithValue("Error in fetching user profile")
    }
})

export const addUser = createAsyncThunk<TUserProfile, FormData, { rejectValue: string }>(
  "data/addUser", async (formData, thunkAPI) => {
    let headers
    try {
      const { avatar_image } = formData

      if (avatar_image) {
        headers = {
          "Content-Type": "multipart/form-data"
        }
      }
      const response = await postRequest('/add-user', formData, headers)
      return response
    } catch (error) {
      console.log("Error in FE [app.delete(/user/:userId)]", error)
      return thunkAPI.rejectWithValue("Error in deleting user profile")
    }
})

export const deleteUser = createAsyncThunk<TUserProfile, number, { rejectValue: string }>(
  "data/deleteUser", async (id, thunkAPI) => {
    try {
      const response = await deleteRequest(`/user/${id}`)
      return response
    } catch (error) {
      console.log("Error in FE [app.delete(/user/:userId)]", error)
      return thunkAPI.rejectWithValue("Error in deleting user profile")
    }
})

export const updateUserProfile = createAsyncThunk<TUserProfile, { id: number; formData: FormData }, { rejectValue: string }>(
  "data/updateUserProfile", async ({ id, formData }, thunkAPI) => {
    let headers
    try {
      const { avatar_image } = formData

      if (avatar_image) {
        headers = {
          "Content-Type": "multipart/form-data"
        }
      }
      const response = await putRequest(`/update-user/${id}`, formData, headers);
      return response;
    } catch (error) {
      console.log("Error in FE [app.put(/update-user/:userId)]", error);
      return thunkAPI.rejectWithValue("Error in updating user profile");
    }
  }
);