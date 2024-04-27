import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type musicType = {
  music: any;
  searchMusic: any
};

const initialState: musicType = {
  music: null,
  searchMusic: null
};

export const GetMusicArr = createAsyncThunk("music", async () => {
  const options = {
    method: "GET",
    url: "https://deezerdevs-deezer.p.rapidapi.com/search",
    params: { q: "dunsin oyekan" },
    headers: {
      "X-RapidAPI-Key": "606c4d9964msh60c2204677a2630p12a1a5jsn9624125c5e1f",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };
  const song = await axios.request(options);
  return song;
});

export const searchMusicArr = createAsyncThunk(
  "searchMusic",
  async (songName: string) => {
    const options = {
      method: "GET",
      url: "https://deezerdevs-deezer.p.rapidapi.com/search",
      params: { q: songName },
      headers: {
        "X-RapidAPI-Key": "606c4d9964msh60c2204677a2630p12a1a5jsn9624125c5e1f",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    };
    const song = await axios.request(options);
    return song;
  }
);

export const GetMusicSlice = createSlice({
  name: "Music",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(GetMusicArr.fulfilled, (state, action) => {
      state.music = action.payload.data;
    });
    builder.addCase(searchMusicArr.fulfilled, (state, action) => {
      state.searchMusic = action.payload;
    });
   
  }
});

export default GetMusicSlice.reducer;
