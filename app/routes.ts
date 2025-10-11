import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";
import { Routes } from "./const/enum";

export default [
  index("routes/homePage/index.tsx"),
  route(Routes.DRAFT, "./routes/draftPage/index.tsx"),
  // route("about", "./about.tsx"),

  // layout("./auth/layout.tsx", [
  // route("login", "./auth/login.tsx"),
  // route("register", "./auth/register.tsx"),
  // ]),
] satisfies RouteConfig;
