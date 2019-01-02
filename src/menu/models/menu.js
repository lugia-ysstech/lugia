/**
 *
 * create by LYQ
 *
 * 2018-12-26
 *
 * @flow
 */
import lugiax from '@lugia/lugiax';

const model = 'menu';
const state = {
  current: null,
};
export default lugiax.register({
  model,
  state,
  mutations: {
    sync: {
      onSelect(state, inParam) {
        const current = inParam.value ;
        return state.set('current', current);
      },
      onChange(state, inParam){
      },

    },
  },
});
