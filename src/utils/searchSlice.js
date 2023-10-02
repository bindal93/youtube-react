import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResult: (state, action) => {
      const { key, value } = action.payload;
      state[key] = value;
    },
    clearCacheResult: (state) => {
      state = {};
    },
    removeCacheResult: (state, action) => {
      delete state[action.payload];
    },
  },
});
export const { cacheResult, clearCacheResult, removeCacheResult } =
  searchSlice.actions;
export default searchSlice.reducer;
