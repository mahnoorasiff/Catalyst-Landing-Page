import { Home, Profile, SignIn, SignUp } from "@/pages";

export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "About Us",
    path: "/profile",
    element: <Profile />,
  },
  {
    name: "Contact Us",
    path: "/sign-in",
    element: <SignIn />,
  },

 
];

export default routes;
