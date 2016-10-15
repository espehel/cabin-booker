import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import DevTools from './containers/DevTools';
import {saveState, loadState} from './localStorage';
import throttle from 'lodash/throttle';

const persistedState = loadState();


const storeEnhancer = compose(
    applyMiddleware(
        thunk
    ),
    DevTools.instrument()
);

export default function () {
  const store = createStore(rootReducer, persistedState, storeEnhancer);
  store.subscribe(throttle(() => {
    saveState({
      cabins: store.getState().cabins});
  }, 1000));
  return store;
}