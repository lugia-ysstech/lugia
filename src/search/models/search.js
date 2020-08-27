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
import tutorialSearchData from "../../tutorial-center/search/searchData";

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
      async fetchRequest(state, value) {
        const { newValue: q, type } = value;
        const chosenSearchData =
          type === "tutorial" ? tutorialSearchData : searchData;

        const res = groupBy(item => {
          return item.type;
        })(
          chosenSearchData
            .filter(item => {
              const { content } = item;
              return q && content.toUpperCase().indexOf(q.toUpperCase()) !== -1;
            })
            .sort((a, b) => a.power - b.power)
        );

        console.info(res);
        return state.set("result", res);
      }
    }
  }
});
