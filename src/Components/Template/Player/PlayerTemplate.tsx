import PlayerTemplateStyle from "./PlayerTemplateStyle";
import imageTest from "../../../assets/drake.jpg";
import backward from "../../../assets/backwards.svg";
import pause from "../../../assets/pause.svg";
import play from "../../../assets/play.svg";
import shuffle from "../../../assets/shuffle-svgrepo-com.svg";
import repeat from "../../../assets/repeat-play-svgrepo-com.svg";
import elipsis from "../../../assets/elipsis.svg";
import heart from "../../../assets/heart.png";
import volume from "../../../assets/volume-min-svgrepo-com.svg";
import { useState } from "react";
import {
  playMusic,
  pauseMusic,
  clearMusic,
  currentMusic,
} from "../../../Redux/ControlSlice";
import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../../Redux/Hooks";

const PlayerTemplate = () => {
  const [musicCount, setMusicCount] = useState(0);
  const audio = useRef<any>(null);
  const audioprogressBar = useRef<any>(null);
  const control = useAppSelector((state) => state.control);
  const dispatch = useAppDispatch();
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    handlerCurrentIndex();
    if (control.play === true) {
      audio.current?.play();
    } else if (control.play === false) {
      audio.current?.pause();
    }
  }, [control.play, musicCount]);

  useEffect(() => {
    dispatch(clearMusic());
  }, []);

  useEffect(() => {
    const playing = setInterval(() => {
      if (!control.play) {
       return clearInterval(playing);
      } else {
        audioprogressBar.current.value = audio.current?.currentTime;
        setTimeProgress(audio?.current?.currentTime);
      }
    }, 1000);

  }, [control.play, musicCount]);


  const musicRangeHandler = () => {
    audio.current.currentTime = audioprogressBar.current.value;
    const currentTime = audio.current.currentTime;
    setTimeProgress(currentTime);
  };

  const handlerCurrentIndex = () => {
    control.currentMusicCollection.filter((song: any, i: any) => {
      if (song.id === control.currentMusic.id) {
        setMusicCount(i);
      }
    });
  };

  const playHandler = async () => {
    await dispatch(playMusic());
    await handlerCurrentIndex();
  };

  const pauseHandler = async () => {
    await dispatch(pauseMusic());
  };

  const changeSonghandler = async (evt: string) => {
    pauseHandler();
    if (evt === "next") {
      await dispatch(
        currentMusic(control.currentMusicCollection[musicCount + 1])
      );
      console.log(musicCount);
      playHandler();
    } else if (evt === "previous") {
      await dispatch(
        currentMusic(control.currentMusicCollection[musicCount - 1])
      );
      console.log(musicCount - 1);
      playHandler();
    }
  };

  const handleLoadedMetadata = () => {
    const seconds = audio.current.duration;
    setDuration(seconds);
    audioprogressBar.current.max = seconds;
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
    <PlayerTemplateStyle>
      <div className="player__container">
        <div className="player__cover__img">
          <img
            src={
              control.currentMusic !== null &&
              control.currentMusic !== undefined
                ? control.currentMusic.album?.cover
                : imageTest
            }
            alt="Music Image"
            className="player__music__image"
          />
          <p>
            {control.currentMusic !== null && control.currentMusic !== undefined
              ? control.currentMusic?.title
              : "Nothing is Playing"}
          </p>
        </div>
        <div className="player__controls__group">
          <audio
            src={control.currentMusic?.preview}
            className="audio__tag"
            ref={audio}
            onLoadedMetadata={handleLoadedMetadata}
          />

          <img
            src={backward}
            alt="backward"
            className="backward__control"
            onClick={() => changeSonghandler("previous")}
          />
          <div className="player__play__pause__group">
            {control.play === false ? (
              <img
                src={play}
                alt="play"
                className="play__control"
                onClick={playHandler}
              />
            ) : (
              <img
                src={pause}
                alt="pause"
                className="pause__control"
                onClick={pauseHandler}
              />
            )}
          </div>
          <img
            src={backward}
            alt="forward"
            className="forward__control"
            onClick={() => changeSonghandler("next")}
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

        <div className="player__details__group">
          <img src={elipsis} alt="elipsis" className="player__mobile__icon" />
          <img src={heart} alt="" className="player__desktop__icon" />
          <img src={shuffle} alt="" className="player__desktop__icon" />
          <img src={repeat} alt="" className="player__desktop__icon" />
          <img src={volume} alt="" className="player__desktop__icon" />
        </div>
      </div>
    </PlayerTemplateStyle>
  );
};

export default PlayerTemplate;
