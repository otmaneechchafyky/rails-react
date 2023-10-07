// app/javascript/redux/reducers.js
import { FETCH_GREETING } from './actions';

const initialState = {
  greeting: '', // Initial state for greeting
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_GREETING:
      return {
        ...state,
        greeting: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;