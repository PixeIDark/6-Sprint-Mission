import { createBrowserRouter } from "react-router-dom";
import { ROUTER_LINKS } from "../utils/constant";
import { Home } from "./Home";
import { Signin } from "./Signin";
import { Signup } from "./Signup";
import { Items } from "./Items";

export const router = createBrowserRouter([
  {
    path: ROUTER_LINKS.home,
    element: <Home />,
  },
  {
    path: ROUTER_LINKS.signin,
    element: <Signin />,
  },
  {
    path: ROUTER_LINKS.signup,
    element: <Signup />,
  },
  {
    path: ROUTER_LINKS.items,
    element: <Items />,
  },
]);
