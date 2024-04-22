import MainLayoutStyle from "./MainLayoutStyle";
import RoutePaths from "../../../Routes";
import NavbarTemplate from "../NavbarTemplate/NavbarTemplate";
import PlayerTemplate from "../Player/PlayerTemplate";

const MainLayout = () => {
  return (
    <MainLayoutStyle>
      <div className="nav">
        <NavbarTemplate />
      </div>
      <div className="route">
        <RoutePaths />
        <div className="Player">
          <PlayerTemplate />
        </div>
      </div>
    </MainLayoutStyle>
  );
};

export default MainLayout;
