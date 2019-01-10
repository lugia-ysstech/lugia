/**
 *
 * create by LYQ
 *
 * 2018-01-09
 *
 * @flow
 */
import lugiax from '@lugia/lugiax';

const model = 'search';
const state = {
  searchInfo: null,
};
export default lugiax.register({
  model,
  state,
  mutations: {
    sync: {

      onTabClick(state, inParam) {
        // console.log('------',state, inParam);
        return state.set('searchInfo', inParam);

      },

    },
  },
});
