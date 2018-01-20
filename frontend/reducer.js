import merge from 'lodash/merge';
import { DO_SOMETHING } from './actions';
const initialState = {counter: 0};

const reducer = (state = initialState, action) => {
  let newState;
  switch(action.type) {
    case DO_SOMETHING:
      newState = merge({}, state);
      newState.counter += action.payload;
      return newState;
    default:
      return state;
  }
};

export default reducer;
