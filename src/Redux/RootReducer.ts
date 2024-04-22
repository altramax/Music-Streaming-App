import { combineReducers } from "@reduxjs/toolkit";
import GetMusicSlice from "./GetMusicSlice";
import ControlSlice from "./ControlSlice";


 const rootReducer:any = combineReducers({
   allMusic : GetMusicSlice,
   control: ControlSlice
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
