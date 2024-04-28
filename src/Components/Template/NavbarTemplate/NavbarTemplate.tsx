import NavbarTemplateStyle from "./NavbarTemplateStyle";
import userlogo from "../../../assets/avatar.svg";
import { FaHeadphonesAlt } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { IoHeartSharp } from "react-icons/io5";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { BsPlayCircleFill } from "react-icons/bs";
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
          <NavLink
            to="/"
            className={`nav__body__groups ${({ isActive }: any) =>
              isActive ? "active" : undefined}`}
          >
            <div className="nav__body__groups__sub">
              <FaHeadphonesAlt size="20" color="#ffffff" />
              <p>Discover</p>
            </div>
          </NavLink>
          <NavLink
            to="/search"
            className={`nav__body__groups ${({ isActive }: any) =>
              isActive ? "active" : undefined}`}
          >
            <div className="nav__body__groups__sub">
              <IoSearchOutline size="20" color="#ffffff" />
              <p>Search</p>
            </div>
          </NavLink>
          <NavLink
            to="/favourites"
            className={`nav__body__groups ${({ isActive }: any) =>
              isActive ? "active" : undefined}`}
          >
            <div className="nav__body__groups__sub">
              <IoHeartSharp size="20" color="#ffffff" />
              <p>Favourites</p>
            </div>
          </NavLink>

          <div className="nav__body__groups">
            <div className="nav__body__groups__sub">
              <BsPlayCircleFill size="20" color="#ffffff" />
              <p>Playlist</p>
            </div>
          </div>
          <div className="nav__body__groups">
            <div className="nav__body__groups__sub">
              <RiBarChartHorizontalLine size="20" color="#ffffff" />
              <p>Charts</p>
            </div>
          </div>
        </div>
      </div>
    </NavbarTemplateStyle>
  );
};

export default NavbarTemplate;
