import { combineReducers } from "@reduxjs/toolkit";
import GetMusicSlice from "./GetMusicSlice";
import MusicPrimaryControlSlice from "./MusicPrimaryControlSlice";
import MusicSecondaryControlSlice from "./MusicSecondaryControlSlice"
import FavouriteSlice from "./FavouriteSlice";


 const rootReducer:any = combineReducers({
   allMusic : GetMusicSlice,
   primaryControl: MusicPrimaryControlSlice,
   secondaryControl: MusicSecondaryControlSlice,
   favouriteSongs: FavouriteSlice
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
