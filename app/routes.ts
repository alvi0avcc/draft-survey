import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  index("routes/SurveyPage/index.tsx"),
  // route("about", "./about.tsx"),

  // layout("./auth/layout.tsx", [
  // route("login", "./auth/login.tsx"),
  // route("register", "./auth/register.tsx"),
  // ]),
] satisfies RouteConfig;
