import { Route, Routes } from "react-router-dom";
import routes from "./Routes";

const RoutePaths = () => {
 return <Routes>
    {routes.map(
      (route) =>
        route.elements &&
        route.elements.map((route, i) => (
          <Route key={i} path={route.path} element={<route.component />} />
        ))
    )}
  </Routes>;
};

export default RoutePaths