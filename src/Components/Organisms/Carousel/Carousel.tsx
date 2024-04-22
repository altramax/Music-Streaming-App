import { useState } from "react";
import CarouselStyle from "./CarouselStyle";
import leftImg from "../../../assets/left-arrow-backup-2-svgrepo-com.svg";
import MusicCard from "../MusicCard/MusicCard";

type carouseltype = {
  songArr: any;
  collectionTitle : string;
};

const Carousel = ({ songArr, collectionTitle }: carouseltype) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 2 ? prevIndex : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? prevIndex : prevIndex - 1
    );
  };

  return (
    <CarouselStyle>
      <div className="carousel__container">
        <div className="carousel__group__title">
          <h3 className="title">{collectionTitle}</h3>
          <div className="line"></div>
          <div className="directions">
            <img src={leftImg} alt="" className="left" onClick={prevSlide} />
            <img src={leftImg} alt="" className="right" onClick={nextSlide} />
          </div>
        </div>

        <div
          className="carousel__group"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {songArr !== null &&
            songArr !== undefined &&
            songArr.data.map((song: any, i: any) => (
              <MusicCard collection={songArr} song={song} key={i} />
            ))}
        </div>
      </div>
    </CarouselStyle>
  );
};

export default Carousel;








