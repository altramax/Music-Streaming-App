import PrimaryMusicControllerStyle from "./PrimaryMusicControllerStyle";
import { useEffect, useRef, useState } from "react";
import {  useAppSelector } from "../../../Redux/Hooks";
import backward from "../../../assets/backwards.svg";
import pauseImg from "../../../assets/pause.svg";
import playImg from "../../../assets/play.svg";

type primaryControlType = {
  duration: number;
  audio: any;
  play: any;
  pause: any;
  changeSong: any;
};

const PrimaryMusicController = ({
  duration,
  audio,
  play,
  pause,
  changeSong,
}: primaryControlType) => {
  const audioprogressBar = useRef<any>(null);
  const primaryControl = useAppSelector((state) => state.primaryControl);
  const songIndex = useAppSelector((state) => state.primaryControl.musicIndex);
  const [timeProgress, setTimeProgress] = useState(0);
 
  useEffect(() => {
    const playing = setInterval(() => {
      if (audio.current?.ended) {
        changeSong("next");
        return clearInterval(playing);
      }
      setTimeProgress(audio.current?.currentTime);

      if (primaryControl.play) {
        audioprogressBar.current.value = audio.current?.currentTime;
      }
    }, 1000);
  }, [primaryControl.play, songIndex]);

  useEffect(() => {
    audioprogressBar.current.max = Math.floor(duration);
  }, [duration]);

  const musicRangeHandler = () => {
    audio.current.currentTime = audioprogressBar.current.value;
    const currentTime = audio.current.currentTime;
    setTimeProgress(currentTime);
  };

  const formatTime = (time: any) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return "00:00";
  };

  return (
    <PrimaryMusicControllerStyle>
      <div className="primary__control__container">
        <div className="player__controls__group">
          <img
            src={backward}
            alt="backward"
            className="backward__control"
            onClick={() => changeSong("previous")}
          />
          <div className="player__play__pause__group">
            {primaryControl.play === false ? (
              <img
                src={playImg}
                alt="play"
                className="play__control"
                onClick={play}
              />
            ) : (
              <img
                src={pauseImg}
                alt="pause"
                className="pause__control"
                onClick={pause}
              />
            )}
          </div>
          <img
            src={backward}
            alt="forward"
            className="forward__control"
            onClick={() => changeSong("next")}
          />
        </div>

        <div className="range__group">
          <p>{formatTime(timeProgress)}</p>
          <input
            ref={audioprogressBar}
            type="range"
            defaultValue={0}
            className="player__range"
            onChange={musicRangeHandler}
          />
          <p>{formatTime(duration)}</p>
        </div>
      </div>
    </PrimaryMusicControllerStyle>
  );
};

export default PrimaryMusicController;
