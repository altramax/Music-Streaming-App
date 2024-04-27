import { combineReducers } from "@reduxjs/toolkit";
import GetMusicSlice from "./GetMusicSlice";
import MusicPrimaryControlSlice from "./MusicPrimaryControlSlice";
import MusicSecondaryControlSlice from "./MusicSecondaryControlSlice"


 const rootReducer:any = combineReducers({
   allMusic : GetMusicSlice,
   primaryControl: MusicPrimaryControlSlice,
   secondaryControl: MusicSecondaryControlSlice

});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
