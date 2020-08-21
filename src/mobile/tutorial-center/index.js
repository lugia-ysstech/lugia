import React from "react";
import { createRoute, Redirect } from "@lugia/lugiax-router";
import PageLoading from "../../pageloading";

const tutorialRouter = {
  "/tutorial": {
    value: "tutorial",
    text: "教程中心",
    url: "/tutorial",
    exact: true,
    render: () => import("./tutorialCenter")
  },
    "/tutorial/pages": {
    value: "/tutorial/pages",
    text: "教程页面",
    url: "/tutorial/pages",
    render: () => import("./pages")
  },
  NotFound: {
    render: async () => {
      return () => <Redirect to={"/home"} />;
    },
    isHidden: true
  }
};

let rout = createRoute(tutorialRouter, PageLoading);

export default () => {
  return <React.Fragment>{rout}</React.Fragment>;
};
