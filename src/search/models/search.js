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
      handleInputChange(state, inParam) {
        return state.set('searchInfo', inParam);

      },
    },
    async:{
      async fetchRequest(state, inParam){
        const resp = await fetch('http://219.141.235.67:9100/api/search',
          {
            method: 'Post',
            body: JSON.stringify({ q: inParam }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
          }).then(response => (response.json())).then(data => {
            return data;
          });
        const res = await resp;
        return state.set('result', res);
      }
    }
  },
});
