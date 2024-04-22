import { currentCollection, currentMusic, playMusic } from "../../../Redux/ControlSlice";
import { useAppDispatch } from "../../../Redux/Hooks";
import MusicCardStyle from "./MusicCardStyle";

type cardType = {
  song: any;
  collection: any
};

const MusicCard = ({ song, collection}: cardType) => {
  const dispatch = useAppDispatch();

  const selectedSongHandler = () => {
    dispatch(currentMusic(song));
    dispatch(playMusic());
    dispatch(currentCollection(collection.data))
    // console.log( collection.data);
  };

  console.log(song);
  return (
    <MusicCardStyle>
      <div className="card__container" onClick={selectedSongHandler}>
        <img src={song.album.cover} alt="album cover" />
        <p>{song.title}</p>
      </div>
    </MusicCardStyle>
  );
};

export default MusicCard;
