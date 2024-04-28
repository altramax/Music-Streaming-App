import { createSlice } from "@reduxjs/toolkit";

type productsType = {
  favouriteCollection: {}[];
};

const initialState: productsType = {
  favouriteCollection: [],
};

export const FavouriteSlice = createSlice({
  name: "Music",
  initialState,
  reducers: {
    favourite: (state, action) => {
      state.favouriteCollection = action.payload;
    },
  },
});

export const { favourite } = FavouriteSlice.actions;
export default FavouriteSlice.reducer;
