/**
 *
 * create by ligx
 *
 * @flow
 */
import lugiax from "@lugia/lugiax";

const model = "tomato";
const state = {
  tomotos: [],
  doing: false,
  time: 0,
  beginAt: "",
  taskName: ""
};
export default lugiax.register({
  model,
  state,
  mutations: {
    sync: {
      switch(state: Object, inParam: Object, { mutations }) {
        if (!state.get("taskName")) {
          return state.set("error", "请填入任务名称");
        }
        state = !state.get("doing") ? mutations.start() : mutations.stop();
        return state.set("error", "");
      },
      start(state: Object, inParam: Object, { mutations }) {
        state = state.set("beginAt", new Date().toString());
        state = state.set("doing", true);
        state = state.set(
          "interval",
          setInterval(() => {
            mutations.updateTime();
          }, 1000)
        );
        return state;
      },

      stop(state: Object) {
        clearInterval(state.get("interval"));
        state = state.set("interval", -1);
        state = state.set("doing", false);
        let tomotos = state.get("tomotos");
        tomotos = tomotos.push({
          time: state.get("time"),
          beginAt: state.get("beginAt"),
          taskName: state.get("taskName")
        });
        return state.set("tomotos", tomotos);
      },

      updateTime(state: Object) {
        return state.set("time", state.get("time") + 1);
      }
    }
  }
});
