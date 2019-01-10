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
        const res={};
        const resp = await fetch('/api/search',
          {
            method: 'Post',
            body: JSON.stringify({ q: inParam }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
          }).then(response => (response.json())).then(data => {
          console.log(data);
          // res = data;
          // res.json(data);
        });
        console.log(resp);
        // res = await resp.json();
        return state.set('result', res);
      }
    }
  },
});
