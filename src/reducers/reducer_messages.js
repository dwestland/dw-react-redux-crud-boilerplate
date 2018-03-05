import * as types from '../actions/types';

const defaultState = {
   errorMessage: '',
   successMessage: '' 
}

export default (state = defaultState, action) => {
  switch (action.type) {

    case types.GET_USER_ERROR:
      console.log('GET_USER_ERROR from reducer_message')
      return Object.assign({}, state, {
        errorMessage : 'Failed to get user(s)',
        successMessage: ''
      });

    case types.ADD_USER:
      console.log('ADD_USER from reducer_message')
      return Object.assign({}, state, {
        successMessage : 'Add user successful',
        errorMessage: ''
      });

    case types.ADD_USER_ERROR:
      console.log('ADD_USER_ERROR from reducer_message')
      return Object.assign({}, state, {
        errorMessage : 'Failed to add user',
        successMessage: ''
      });

    case types.DELETE_USER:
      console.log('DELETE_USER_SUCCESS from reducer_message')
      return Object.assign({}, state, {
        successMessage : 'Delete user successful',
        errorMessage: ''
      });

    case types.DELETE_USER_ERROR:
      console.log('DELETE_USER_ERROR from reducer_message')
      return Object.assign({}, state, {
        errorMessage : 'Failed to delete user',
        successMessage : ''
      });

    case types.UPDATE_USER:
      console.log('UPDATE_USER_USER_SUCCESS from reducer_message')
      return Object.assign({}, state, {
        successMessage : 'Update user successful',
        errorMessage: ''
      });

    case types.UPDATE_USER_ERROR:
      console.log('UPDATE_USER_USER_ERROR from reducer_message')
      return Object.assign({}, state, {
        errorMessage : 'Failed to update user',
        successMessage : ''
      });

    case types.CLEAR_ALL_MESSAGES:
      return Object.assign({}, state, {
        successMessage: '',
        errorMessage: ''
      });
      
    default:
      return state;
  }
}
