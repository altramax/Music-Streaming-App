import DashboardTemplateStyle from "./DashboardTemplateStyle";
import headerImg from "../../../assets/hero.svg";
import moon from "../../../assets/moon.svg";
import sun from "../../../assets/sun.svg";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../Redux/Hooks";
import { GetMusicArr } from "../../../Redux/GetMusicSlice";
import Carousel from "../../Organisms/Carousel/Carousel";

const DashboardTemplate = () => {
  const dispatch = useAppDispatch();
  const musicArr: any = useAppSelector((state) => state.allMusic.music);

  useEffect(() => {
    dispatch(GetMusicArr());
    console.log("reload");
  }, []);

  return (
    <DashboardTemplateStyle>
      <div className="dashboard__container">
        <div className="dashboard__header">
          <img src={headerImg} alt="headerImg" className="main__header__img" />
          <div className="text__group">
            <h2>Your favourite tunes</h2>
            <h2>
              All <img src={sun} alt="" /> and all <img src={moon} alt="" />
            </h2>
          </div>
        </div>
        <div className="dashboard__body">
          <div className="card__group__container">
            <Carousel songArr={musicArr} collectionTitle="Artist Of the Week" />
            <Carousel songArr={musicArr} collectionTitle="Top Rated Playlist" />
          </div>
        </div>
      </div>
    </DashboardTemplateStyle>
  );
};

export default DashboardTemplate;
