import merge from 'lodash/merge';
import { DO_SOMETHING } from './actions';
const initialState = {counter: 0};

const reducer = (state = initialState, action) => {
  let newState;
  console.log('reducer');
  switch(action.type) {
    case DO_SOMETHING:
      console.log('asdf', action.payload);
      newState = merge({}, state);
      newState.counter += action.payload;
      console.log(newState.counter);
      return newState;
    default:
      return state;
  }
};

export default reducer;
