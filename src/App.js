import React from "react";
import { createRoute, Redirect } from "@lugia/lugiax-router";
import PageLoading from "./pageloading";
import Widgets from "./widgets";
import Mega from "./mega";

export const designRouter = {
  "/": {
    exact: true,
    render: async () => import("./home"),
    value: "/home",
    isHidden: true,
    verify() {
      return true;
    }
  },
  "/home": {
    value: "首页",
    text: "首页",
    url: "/home",
    isHidden: true,
    render: () => import("./home")
  },
  "/design": {
    value: "设计指南",
    text: "设计指南",
    url: "/design/introduce",
    render: () => import("./design"),
    verify() {
      return true;
    }
  },
  "/component": {
    value: "lugia-web",
    text: "lugia-web",
    url: "/component/lugia",
    component: Widgets,
    verify() {
      return true;
    }
  },
  "/lugia-mega": {
    value: "lugia-mega",
    text: "lugia-mega",
    url: "/lugia-mega",
    component: Mega
  },
  "/logs": {
    value: "更新日志",
    text: "更新日志",
    url: "/logs",
    render: () => import("./logs")
  },
  "/doc": {
    value: "lugia-archive",
    text: "获取文档",
    url: "/doc",
    render: () => import("./archive")
  },
  "/tutorial": {
    value: "tutorial",
    text: "教程中心",
    url: "/tutorial",
    render: () => import("./tutorial-center"),
    verify() {
      return true;
    }
  },
  NotFound: {
    render: async () => {
      return () => <Redirect to={"/home"} />;
    },
    isHidden: true
  }
};
export const designRouterMobile = {
  "/": {
    exact: true,
    render: async () => import("./mobile/home"),
    value: "/home",
    isHidden: true,
    verify() {
      return true;
    }
  },
  "/home": {
    value: "首页",
    text: "首页",
    url: "/home",
    isHidden: true,
    render: () => import("./mobile/home")
  },
  "/design": {
    value: "设计指南",
    text: "设计指南",
    url: "/design",
    render: () => import("./mobile/design")
  },
  "/component": {
    value: "lugia-web",
    text: "lugia-web",
    url: "/component",
    render: () => import("./mobile/widgets"),
    verify() {
      return true;
    }
  },
  "/lugia-mega": {
    value: "lugia-mega",
    text: "lugia-mega",
    url: "/lugia-mega",
    render: () => import("./mobile/mega")
  },
  "/logs": {
    value: "更新日志",
    text: "更新日志",
    url: "/logs",
    render: () => import("./mobile/logs")
  },
  "/doc": {
    value: "lugia-archive",
    text: "lugia-archive",
    url: "/doc",
    render: () => import("./archive")
  },
  "/tutorial": {
    value: "教程中心",
    text: "教程中心",
    url: "/tutorial",
    isHidden: true,
    render: () => import("./mobile/tutorial-center")
  },
  NotFound: {
    render: async () => {
      return () => <Redirect to={"/home"} />;
    },
    isHidden: true
  }
};
let rout = createRoute(designRouter, PageLoading);

const u = window.navigator.userAgent.toLowerCase();
if (
  u.indexOf("iphone") > -1 ||
  u.indexOf("android") > -1 ||
  u.indexOf("ipad") > -1
) {
  const _query_url = location.search;
  if (_query_url.indexOf("ismobile") < 0) {
    console.log("ismobile");
    rout = createRoute(designRouterMobile, PageLoading);
  }
}

export default () => {
  return <React.Fragment>{rout}</React.Fragment>;
};

const styles = {
  width: "1140px",
  height: "100%",
  margin: "0 auto"
};
