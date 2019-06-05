// redux dependencies
import { combineReducers } from 'redux';

// reducers
import bankLoginReducer from './bankLoginReducer';

const reducers = combineReducers({
  bankLoginReducer,
});

export default reducers;
