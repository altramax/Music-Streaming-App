import { useAppDispatch, useAppSelector } from "../../../Redux/Hooks";
import SearchTemplateStyle from "./SearchTemplateStyles";
import EmptyState from "../../Molecules/EmptyState/EmptyState";
import headerImg from "../../../assets/hero.svg";
import moon from "../../../assets/moon.svg";
import sun from "../../../assets/sun.svg";
import search from "../../../assets/search.png";
import { useState } from "react";
import { searchMusicArr } from "../../../Redux/GetMusicSlice";
import Carousel from "../../Organisms/Carousel/Carousel";

const SearchTemplate = () => {
  const control = useAppSelector((state) => state.allMusic);
  const dispatch = useAppDispatch();
  const searchResults = useAppSelector((state) => state.allMusic.searchMusic);
  const [searchTerm, setsearchTerm] = useState("");

  const handlerInput = (evt: any) => {
    setsearchTerm(evt.target.value);
  };

  const handleSearch = (evt:any) => {
    evt.preventDefault();
    dispatch(searchMusicArr(searchTerm));
  };
  
  return (
    <SearchTemplateStyle>
      <form onSubmit={handleSearch}>
        <div className="dashboard__header">
          <img src={headerImg} alt="headerImg" className="main__header__img" />
          <div className="search__input">
            <input
              type="text"
              className="search__input"
              value={searchTerm}
              onChange={handlerInput}
            />
            <img src={search} alt="" onClick={handleSearch} />
          </div>
          <div className="text__group">
            <h2>Search for Your favourite tunes</h2>
            <h2>
              All <img src={sun} alt="" /> and all <img src={moon} alt="" />
            </h2>
          </div>
        </div>
        <div className="searchTemplate__body">
          { control.searchMusic?.data?.data.length === 0 ? (
            <div>
              <EmptyState
                header="Nothing to Show"
                text="Start Searching for Music Here"
              />
            </div>
          ) : (
            <div className="card__group__container">
              <Carousel
                songArr={searchResults?.data}
                collectionTitle="Results"
              />
            </div>
          )}
        </div>
      </form>
    </SearchTemplateStyle>
  );
};

export default SearchTemplate;
