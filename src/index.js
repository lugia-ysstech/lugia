import React from 'react';
import { createHashHistory } from 'history';
import { createApp, go, render } from '@lugia/lugiax-router';
import '@lugia/lugia-web/dist/css/global.css';
import Main from './App';
import 'highlight.js/styles/atom-one-light.css';
import PageLoading from './pageloading';
import Highlight from 'react-highlight';
const history = createHashHistory();
const App = createApp(
  {
    '/': {
      component: Main
    }
  },
  history,
  {
    loading:  PageLoading,
    async onBeforeGo({ url }) {
      window.scrollTo(0,0);
      if (url === '/nowPower') {
        await go({ url: '/404' });
        return false;
      }
      return url !== '/not';
    }
  }
);

render(() => {
  return <App />;
}, 'root');
