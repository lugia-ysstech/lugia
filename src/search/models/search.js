/**
 *
 * create by LYQ
 *
 * 2018-01-09
 *
 * @flow
 */
import lugiax from "@lugia/lugiax";
import { groupBy } from "ramda";
import searchData from "../../router/search";
const model = "search";
const state = {
  searchInfo: null
};
export default lugiax.register({
  model,
  state,
  mutations: {
    sync: {
      handleInputChange(state, inParam) {
        return state.set("searchInfo", inParam);
      }
    },
    async: {
      async fetchRequest(state, q) {
        q = q || "";
        const res = groupBy(item => {
          return item.type;
        })(
          searchData
            .filter(item => {
              const { content } = item;
              return content.toUpperCase().indexOf(q.toUpperCase()) !== -1;
            })
            .sort((a, b) => a.power - b.power)
        );

        console.info(res);
        return state.set("result", res);
      }
    }
  }
});
