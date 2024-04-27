import SecondaryMusicControllerStyle from "./SecondaryMusicControllerStyle";
import { TfiControlShuffle } from "react-icons/tfi";
import { RiRepeatFill } from "react-icons/ri";
import elipsis from "../../../assets/elipsis.svg";
import { IoHeartSharp } from "react-icons/io5";
import { IoVolumeMedium } from "react-icons/io5";
import { RiRepeatOneFill } from "react-icons/ri";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../Redux/Hooks";
import { IoVolumeMuteSharp } from "react-icons/io5";
import {
  musicVolume,
  repeatMusic,
  shuffleMusic,

} from "../../../Redux/MusicSecondaryControlSlice";

const SecondaryMusicController = () => {
  const dispatch = useAppDispatch();
  const [controlModal, setControlModal] = useState(false);
  const repeatState = useAppSelector((state) => state.secondaryControl.repeat);
  const volume = useAppSelector((state) => state.secondaryControl.volume);
  const shuffleState = useAppSelector(
    (state) => state.secondaryControl.shuffle
  );

  const showControlIcons = () => {
    setControlModal(!controlModal);
  };

  const repeathandler = () => {
    if (repeatState === "noRepeat") {
      dispatch(repeatMusic("repeatOne"));
      dispatch(shuffleMusic(false));
    } else if (repeatState === "repeatOne") {
      dispatch(repeatMusic("noRepeat"));
    }
  };

  const shuffleHandler = () => {
    if (!shuffleState) {
      dispatch(shuffleMusic(true));
      dispatch(repeatMusic("noRepeat"));
    } else if (shuffleState) {
      dispatch(shuffleMusic(false));
    }
  };

  const muteHandler = () => {
    if (!volume) {
      dispatch(musicVolume(true));
    } else if (volume) {
      dispatch(musicVolume(false));
  };
  }
  return (
    <SecondaryMusicControllerStyle>
      <div className="player__details__group">
        <img
          src={elipsis}
          alt="elipsis"
          className="player__mobile__icon"
          onClick={showControlIcons}
        />
        <div
          className={`player__desktop__icons ${controlModal ? "show" : "hide"}`}
        >
          <IoHeartSharp size={20} color={"#808080"} />
          <div onClick={shuffleHandler}>
            {shuffleState === false && (
              <TfiControlShuffle size={20} color={"#808080"} />
            )}
            {shuffleState === true && (
              <TfiControlShuffle size={20} color={"red"} />
            )}
          </div>
          <div onClick={repeathandler}>
            {repeatState === "noRepeat" && (
              <RiRepeatFill size={20} color={"#808080"} />
            )}
            {repeatState === "repeatOne" && (
              <RiRepeatOneFill size={20} color={"red"} />
            )}
          </div>

          <div onClick={muteHandler}>
           { !volume ? <IoVolumeMedium size={20} color={"#808080"}/> : <IoVolumeMuteSharp  size={20} color={"red"}/>}
          </div>
          
 
        </div>
      </div>
    </SecondaryMusicControllerStyle>
  );
};

export default SecondaryMusicController;
