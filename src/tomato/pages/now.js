/**
 *
 * create by ligx
 *
 * @flow
 */

import React from "react";
import InputTask from "../../todo/components/InputTask";
import { bindTo } from "@lugia/lugiax";

import Button from "../components/Button";
import NowTimer from "../components/NowTimer";
import Message from "../components/Message";
import tomato from "../models/tomato";

const { mutations } = tomato;
const TomatoButton = bindTo(
  tomato,
  {
    doing: "doing"
  },
  {},
  {
    onClick() {
      mutations.switch();
    }
  }
)(Button);
const TomatoMessage = bindTo(
  tomato,
  {
    error: "msg"
  },
  {},
  {}
)(Message);

const TomatoNowTimer = bindTo(
  tomato,
  {
    doing: "doing",
    beginAt: "beginAt",
    time: "time",
    taskName: "taskName"
  },
  {},
  {
    onClick() {}
  }
)(NowTimer);

const TodoInput = bindTo(
  tomato,
  {
    taskName: "value"
  },
  {
    onChange: {
      taskName(v) {
        return v;
      }
    }
  }
)(InputTask);

export default () => {
  return (
    <div>
      <TodoInput />
      <TomatoButton data={["开始番茄钟", "停止番茄钟"]} />
      <TomatoNowTimer />
      <TomatoMessage />
    </div>
  );
};
