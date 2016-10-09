import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import configureStore from './configureStore';

import App from './containers/App';
import Home from './components/Home';
import CabinOverview from './containers/CabinsOverview'
import CabinPage from './containers/CabinPage';


const store = configureStore();


render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="cabins" component={CabinOverview} />
        <Route path="cabins/:cabinid" component={CabinPage} />
      </Route>
    </Router>
  </Provider>,
    document.querySelector('#app')
);