import React from "react";
import { createRoute, Redirect } from "@lugia/lugiax-router";
import PageLoading from "../pageloading";

const tutorialRouter = {
  "/tutorial": {
    value: "tutorial",
    text: "教程中心",
    url: "/tutorial",
    exact: true,
    render: () => import("./tutorialCenter")
  },
  "/tutorial/feedback": {
    value: "feedback",
    text: "反馈",
    url: "/feedback",
    exact: true,
    render: async () => {
      return import("./feedback");
    }
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
