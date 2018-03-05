import * as types from '../actions/types';

const defaultState = [];

export default (state = defaultState, action) => {
  switch (action.type) {

    case types.GET_USERS:
      console.log('GET_USERS from reducer_users')
      return action.users;

    case types.ADD_USER:
      console.log('ADD_USER from reducer_users')
      return [...state, action.user];

    case types.DELETE_USER:
      console.log('DELETE_USER from reducer_users', action.id)
      return state.filter(user => user.id !== action.id);

    case types.UPDATE_USER:
      console.log('UPDATE_USER from reducer_users', action.id)
      return state.map(user => {
        if(user.id === action.user.id) {
          return action.user;
        }
        return user;
      });

    default:
      return state;
  }
}
