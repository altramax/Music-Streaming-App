import PlayerTemplateStyle from "./PlayerTemplateStyle";
import imageTest from "../../../assets/drake.jpg";
import SecondaryMusicController from "../../Organisms/SecondaryMusicControler/SecondaryMusicController";
import { useState } from "react";
import {
  playMusic,
  pauseMusic,
  currentMusic,
  clearMusic,
} from "../../../Redux/MusicPrimaryControlSlice";
import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../../Redux/Hooks";
import PrimaryMusicController from "../../Organisms/PrimaryMusicControler/PrimaryMusicController";

const PlayerTemplate = () => {
  const audio = useRef<any>(null);
  const primaryControl = useAppSelector((state) => state.primaryControl);
  const dispatch = useAppDispatch();
  const [duration, setDuration] = useState(0);
  const repeat = useAppSelector((state) => state.secondaryControl.repeat);
  const mute = useAppSelector((state) => state.secondaryControl.volume);
  const songIndex = useAppSelector((state) => state.primaryControl.musicIndex);
  const shuffle = useAppSelector((state) => state.secondaryControl.shuffle);

  useEffect(() => {
    if (primaryControl.play === true) {
      audio.current?.play();
    } else if (primaryControl.play === false) {
      audio.current?.pause();
    }

  
  }, [
    primaryControl.play,
    primaryControl.musicIndex,
    primaryControl.currentMusic,
    shuffle,
  ]);

  useEffect(() => {
    dispatch(clearMusic());
  }, []);


  const playHandler = () => {
    if (audio.current?.ended && repeat === true) {
      audio.current.currentTime = 0;
    }

    dispatch(
      playMusic([
        primaryControl.currentMusic,
        primaryControl.currentMusicCollection,
      ])
    );
  };

  const changeSonghandler = (evt: string) => {
    const shuffleCount = primaryControl.currentMusicCollection.filter(
      (state: any) => state.id !== primaryControl.currentMusic.id
    );
    const random = Math.floor(Math.random() * shuffleCount.length + 1);
    dispatch(
      playMusic([primaryControl.currentMusicCollection[random], shuffleCount])
    );

    console.log(primaryControl.currentMusicCollection);

    if (evt === "next" && !shuffle) {
      dispatch(
        currentMusic(primaryControl.currentMusicCollection[songIndex + 1])
      );
      dispatch(
        playMusic([
          primaryControl.currentMusicCollection[songIndex + 1],
          primaryControl.currentMusicCollection,
        ])
      );
    } else if (evt === "next" && shuffle) {
      dispatch(
        currentMusic(primaryControl.currentMusicCollection[songIndex + 1])
      );
      dispatch(
        playMusic([primaryControl.currentMusicCollection[random], shuffleCount])
      );
    } else if (evt === "previous") {
      dispatch(
        currentMusic(primaryControl.currentMusicCollection[songIndex - 1])
      );
      dispatch(
        playMusic([
          primaryControl.currentMusicCollection[songIndex - 1],
          primaryControl.currentMusicCollection,
        ])
      );
    }
  };
  // console.log(songIndex);

  const pauseHandler = () => {
    dispatch(pauseMusic());
  };

  const handleLoadedMetadata = () => {
    const seconds = audio.current.duration;
    setDuration(seconds);
  };

  return (
    <PlayerTemplateStyle>
      <div className="player__container">
        <div className="audio__container">
          <audio
            src={primaryControl.currentMusic?.preview}
            className="audio__tag"
            ref={audio}
            onLoadedMetadata={handleLoadedMetadata}
            loop={repeat === "repeatOne" ? true : false}
            muted={mute ? true : false}
          />
        </div>
        <div className="player__cover__img">
          <img
            src={
              primaryControl.currentMusic !== null &&
              primaryControl.currentMusic !== undefined
                ? primaryControl.currentMusic.album?.cover
                : imageTest
            }
            alt="Music Image"
            className="player__music__image"
          />
          <p>
            {primaryControl.currentMusic !== null &&
            primaryControl.currentMusic !== undefined
              ? primaryControl.currentMusic?.title
              : "Nothing is Playing"}
          </p>
        </div>
        <div className="primary__control">
          <PrimaryMusicController
            duration={duration}
            audio={audio}
            play={playHandler}
            pause={pauseHandler}
            changeSong={changeSonghandler}
          />
        </div>

        <div className="secondary__control">
          <SecondaryMusicController />
        </div>
      </div>
    </PlayerTemplateStyle>
  );
};

export default PlayerTemplate;
