/**
 *
 * create by ligx
 *
 * @flow
 */
import lugiax from "@lugia/lugiax";

const model = "todo";
const state = {
  formData: {
    task: ""
  },
  tasks: ["hello"]
};
export default lugiax.register({
  model,
  state,
  mutations: {
    sync: {
      addTask(state, inParam, { mutations }) {
        const task = state.getIn(["formData", "task"]);
        if (!task) {
          return state;
        }
        let tasks = state.get("tasks");
        tasks = tasks.push(task);
        state = mutations.cleanTaksInput();
        return state.set("tasks", tasks);
      },

      delTask(state, inParam) {
        let tasks = state.get("tasks");
        tasks = tasks.delete(tasks.findIndex(title => title === inParam.title));
        return state.set("tasks", tasks);
      },

      cleanTaksInput(state) {
        return state.setIn(["formData", "task"], "");
      }
    }
  }
});
