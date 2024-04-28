import SearchLayoutStyle from "./SearchLayoutStyle";
import MusicCard from "../MusicCard/MusicCard";

type SearchLayouttype = {
  songArr: any;
};

const SearchLayout = ({ songArr }: SearchLayouttype) => {
  return (
    <SearchLayoutStyle>
      <div className="SearchLayout__container">
        <div className="SearchLayout__group">
          {songArr !== null &&
            songArr !== undefined &&
            songArr.map((song: any, i: any) => {
              return <MusicCard collection={songArr} song={song} key={i} />;
            })}
        </div>
      </div>
    </SearchLayoutStyle>
  );
};

export default SearchLayout;
