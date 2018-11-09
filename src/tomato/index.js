/**
 *
 * create by ligx
 *
 * @flow
 */
import React from "react";
import { createRoute, Link } from "@lugia/lugiax-router";

export default () => {
  return [
    <div>番茄工作法 🍅</div>,
    <Link to="/tomato/history">历史任务</Link>,
    " ",
    <Link to="/tomato/now">当前任务</Link>,
    createRoute({
      "/tomato/history": {
        render: async () => import("./pages/history")
      },
      "/tomato": {
        render: () => import("./pages/now"),
        exact: true
      },
      "/tomato/now": {
        render: () => import("./pages/now")
      }
    })
  ];
};
