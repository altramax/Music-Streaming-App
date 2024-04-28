import CarouselStyle from "./CarouselStyle";
import leftImg from "../../../assets/left-arrow-backup-2-svgrepo-com.svg";
import MusicCard from "../MusicCard/MusicCard";

type carouseltype = {
  songArr: any;
  collectionTitle: string;
};

const Carousel = ({ songArr, collectionTitle }: carouseltype) => {
  return (
    <CarouselStyle>
      <div className="carousel__container">
        <div className="carousel__group__title">
          <h3 className="title">{collectionTitle}</h3>
          <div className="line"></div>
          <div className="directions">
            <img src={leftImg} alt="" className="left" />
            <img src={leftImg} alt="" className="right" />
          </div>
        </div>

        <div className="carousel__group">
          {songArr !== null &&
            songArr !== undefined &&
            songArr.data.map((song: any, i: any) => (
              <MusicCard collection={songArr?.data} song={song} key={i} />
            ))}
        </div>
      </div>
    </CarouselStyle>
  );
};

export default Carousel;
