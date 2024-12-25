import { createSlice, createAsyncThunk, PayloadAction  } from "@reduxjs/toolkit";
import axios from "axios";

interface homeState {
  data: object;
  version: Number,
  loading: boolean;
  error: string | null;
}

const initialState: homeState = {
  data: {},
  version: 0,
  loading: false,
  error: null,
};

export const fetchHomeData = createAsyncThunk("surah/fetchHomeData", async (_, thunkAPI) => {
  try {
    const response = await axios.get("https://iqra-backend-git-master-iftikharrashas-projects.vercel.app/api/iqra/expo/home");
    return response.data.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message || "Failed to fetch surah data");
  }
});

const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {}, 
    extraReducers: (builder) => {
        builder
        .addCase(fetchHomeData.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchHomeData.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(fetchHomeData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });
    },
});

export default homeSlice.reducer;
