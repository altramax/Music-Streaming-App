import { createSlice } from "@reduxjs/toolkit";

type productsType = {
  repeat: string;
  shuffle: boolean;
  volume: boolean;
};

const initialState: productsType = {
  repeat: "noRepeat",
  shuffle: false,
  volume: true,
};

export const MusicSecondaryControlSlice = createSlice({
  name: "Music",
  initialState,
  reducers: {
    repeatMusic: (state, action) => {
      state.repeat = action.payload;
    },
    shuffleMusic: (state, action) => {
      state.shuffle = action.payload;
    },
    musicVolume: (state, action) => {
      state.volume = action.payload;
    },
  },
});

export const { repeatMusic, shuffleMusic, musicVolume } =
  MusicSecondaryControlSlice.actions;
export default MusicSecondaryControlSlice.reducer;
