import {RECEIVE_CABINS} from '../actions/index';

export default (state = [], action) => {
  switch (action.type) {
    case RECEIVE_CABINS: {
      return action.cabins;
    }
    default: return state;
  }
}