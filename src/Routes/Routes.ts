import DashboardTemplate from "../Components/Template/DashboardTemplate/DashboardTemplate";
import SearchTemplate from "../Components/Template/SearchTemplate/SearchTemplate";

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
];

export default routes;
