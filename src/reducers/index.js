import { combineReducers } from 'redux';

import { peopleReducers } from './peopleReducers';
import reducer_users from './reducer_users';
import reducer_messages from './reducer_messages';

const rootReducer = combineReducers({
  people: peopleReducers,
  users: reducer_users,
  messages: reducer_messages
});

export default rootReducer;