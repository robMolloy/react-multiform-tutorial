import Home from "./components/pages/Home";
import MultiformPage from "./components/pages/MultiformPage";

import HomeIcon from "@material-ui/icons/Home";
import MultiformIcon from "@material-ui/icons/Filter1";

const config = {
  pages: [
    {
      order: "0",
      path: "home",
      name: "Home",
      Component: Home,
      Icon: HomeIcon,
    },
    {
      order: "1",
      path: "multiform",
      name: "multiform",
      Component: MultiformPage,
      Icon: MultiformIcon,
    },
  ],
};

export default config;
