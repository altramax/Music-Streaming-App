import FavouritesStyle from "./FavouritesStyle";
import headerImg from "../../../assets/hero.svg";
import moon from "../../../assets/moon.svg";
import sun from "../../../assets/sun.svg";
import { useAppSelector } from "../../../Redux/Hooks";
import SearchLayout from "../../Organisms/Search/SearchLayout";
import EmptyState from "../../Molecules/EmptyState/EmptyState";

const Favourites = () => {
    const songArr = useAppSelector(state=> state.favouriteSongs.favouriteCollection);


  return (
    <FavouritesStyle>
      <div className="favourite__container">
        <div className="dashboard__header">
          <img src={headerImg} alt="headerImg" className="main__header__img" />
          <div className="text__group">
            <h2>Your favourite tunes</h2>
            <h2>
              All <img src={sun} alt="" /> and all <img src={moon} alt="" />
            </h2>
          </div>
        </div>
        <div className="favourite__body">
        
        {songArr.length !== 0 ? <SearchLayout songArr={songArr}/> : <EmptyState header="You Don't Have Any Favourites Songs" text="Like a song to see favourite songs here"/>}
        </div>
      </div>
    </FavouritesStyle>
  );
};

export default Favourites;
