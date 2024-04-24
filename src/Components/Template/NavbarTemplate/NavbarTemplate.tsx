import NavbarTemplateStyle from "./NavbarTemplateStyle";
import userlogo from "../../../assets/avatar.svg";
import headphone from "../../../assets/headphones.png";
import search from "../../../assets/search.png";
import heart from "../../../assets/heart.png";
import hambrger from "../../../assets/hamburger.png";
import play from "../../../assets/play.png";
import { NavLink } from "react-router-dom";

const NavbarTemplate = () => {

  return (
    <NavbarTemplateStyle>
      <div className="nav__container">
        <div className="nav__header">
          <img src={userlogo} alt="user" />
          <p className="header__text">Bob Smith</p>
        </div>
        <div className="nav__body">
          <NavLink to="/" className={`nav__body__groups ${({ isActive }: any) => (isActive ? "active" : undefined)}`}>
            <div className="nav__body__groups__sub">
              <img src={headphone} alt="" />
              <p>Discover</p>
            </div>
          </NavLink>
          <NavLink to="/search" className={`nav__body__groups ${({ isActive }: any) => (isActive ? "active" : undefined)}`}>
            <div className="nav__body__groups__sub">
              <img src={search} alt="" />
              <p>Search</p>
            </div>
          </NavLink>
          <div className="nav__body__groups">
            <div className="nav__body__groups__sub">
              <img src={heart} alt="" />
              <p>Favourites</p>
            </div>
          </div>
          <div className="nav__body__groups">
            <div className="nav__body__groups__sub">
              <img src={play} alt="" />
              <p>Playlist</p>
            </div>
          </div>
          <div className="nav__body__groups">
            <div className="nav__body__groups__sub">
              <img src={hambrger} alt="" />
              <p>Charts</p>
            </div>
          </div>
        </div>
      </div>
    </NavbarTemplateStyle>
  );
};

export default NavbarTemplate;
