/**
 *
 * create by ligx
 *
 * @flow
 */
import React, { Component } from "react";
import InputTask from "./components/InputTask";
import List from "./components/List";
import { bindTo, connect } from "@lugia/lugiax";
import todo from "./models/todo";

const TodoList = connect(
  todo,
  state => {
    return { data: state.todo.get("tasks") };
  },
  mutations => {
    const { todo } = mutations;
    return { delItem: todo.delTask };
  }
)(List);

const fieldPath = ["formData", "task"];
const fieldName = fieldPath.join(".");

const TodoInput = bindTo(
  todo,
  {
    [fieldName]: "value"
  },
  {
    onChange: {
      [fieldName](v) {
        return v;
      }
    }
  },
  {
    onEnter() {
      todo.mutations.addTask();
    }
  }
)(InputTask);

export default () => {
  return (
    <div>
      <TodoInput />
      <TodoList />
    </div>
  );
};
