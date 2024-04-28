import DashboardTemplate from "../Components/Template/DashboardTemplate/DashboardTemplate";
import SearchTemplate from "../Components/Template/SearchTemplate/SearchTemplate";
import Favourites from "../Components/Template/Favourites/Favourites";

const routes = [
  {
    elements: [
      {
        path: "/",
        component: DashboardTemplate,
      },
    ],
  },
  {
    elements: [
      {
        path: "/search",
        component: SearchTemplate,
      },
    ],
  },
  {
    elements: [
      {
        path: "/favourites",
        component: Favourites,
      },
    ],
  },
];

export default routes;
