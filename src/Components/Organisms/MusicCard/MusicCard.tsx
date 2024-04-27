import { currentCollection, currentMusic, playMusic, pauseMusic} from "../../../Redux/MusicPrimaryControlSlice";
import { useAppDispatch} from "../../../Redux/Hooks";
import MusicCardStyle from "./MusicCardStyle";

type cardType = {
  song: any;
  collection: any
};

const MusicCard = ({ song, collection}: cardType) => {
  const dispatch = useAppDispatch();

  const selectedSongHandler = () => {
    dispatch(pauseMusic());
    dispatch(currentMusic(song)); 
    dispatch(playMusic([song, collection.data]));
    dispatch(currentCollection(collection.data))
  };


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
