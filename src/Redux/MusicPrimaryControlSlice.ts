import { createSlice } from "@reduxjs/toolkit";

type productsType = {
  play: boolean;
  currentMusic: any;
  currentMusicCollection: any;
  musicIndex: number;
};

const initialState: productsType = {
  play: false,
  currentMusic: null,
  currentMusicCollection: [],
  musicIndex: 0,
};

export const MusicPrimaryControlSlice = createSlice({
  name: "Music",
  initialState,
  reducers: {
    playMusic: (state, action) => {
      action.payload[1].filter((song: any, i: any) => {
        if (song.id === action.payload[0].id) {
           state.musicIndex = i
           state.play = true
           console.log(i);
        }
      })
    },
    pauseMusic: (state) => {
      state.play = false;
    },
    clearMusic: (state) => {
      state.play = false;
    },
    currentMusic: (state, action) => {
      state.currentMusic = action.payload;
    },
    currentCollection: (state, action) => {
      state.currentMusicCollection = action.payload;
    },
    currentMusicIndex: (state, action) => {
      state.musicIndex = action.payload;
    },
  },
});

export const {
  playMusic,
  pauseMusic,
  currentMusic,
  clearMusic,
  currentCollection,
  currentMusicIndex
} = MusicPrimaryControlSlice.actions;
export default MusicPrimaryControlSlice.reducer;
