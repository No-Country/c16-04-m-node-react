//userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// Define the async thunk for fetching user data
export const fetchData = createAsyncThunk('recipe/fetchData', async () => {
  const response = await fetch("/src/data/recetas.json");
  const jsonData = await response.json();
  console.log(jsonData)
  return jsonData;
  
});
// Define the user slice
export const recipesSlice = createSlice({
  name: 'recipes',
  initialState: { data: null, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default recipesSlice.reducer;
