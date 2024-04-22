import { createSlice} from "@reduxjs/toolkit";

type productsType = {
  play: boolean;
  currentMusic: any;
  currentMusicCollection: any;
  nextMusic: any;
  previousMusic: any
};

const initialState: productsType = {
  play: false,
  currentMusic: null,
  currentMusicCollection: [],
  nextMusic: [],
  previousMusic:[]
};

export const ControlSlice = createSlice({
  name: "Music",
  initialState,
  reducers: {
    playMusic: (state) => {
      state.play = true;
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
    nextMusic :  (state)=>{
       let g = state.currentMusicCollection.filter( (song:any) => {
          console.log( song.id, state.currentMusic[0])
        });
        console.log(g);
    }
  },
});

export const {
  playMusic,
  pauseMusic,
  currentMusic,
  clearMusic,
  currentCollection,
  nextMusic
} = ControlSlice.actions;
export default ControlSlice.reducer;
