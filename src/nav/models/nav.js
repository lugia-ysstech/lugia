/**
 *
 * create by LYQ
 *
 * 2018-12-26
 *
 * @flow
 */
import lugiax from '@lugia/lugiax';

const model = 'nav';
const state = {
  current: null,
};
export default lugiax.register({
  model,
  state,
  mutations: {
    sync: {

      onTabClick(state, inParam) {
        // console.log('------',state, inParam);
        return state.set('current', inParam);

      },

    },
  },
});
