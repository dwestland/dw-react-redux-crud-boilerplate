import UsersApi from './../api/UsersApi';
import * as types from './types';

// Get existing users
const getUsersAsync = (users) => {
  return {
    type: types.GET_USERS,
    users
  };
}

export const getUsers = () => {
  return (dispatch) => {
    return UsersApi.getUsers()
    .then(users => {
      dispatch(getUsersAsync(users));
      console.log('dispatch getUsersAsync', users);
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: types.GET_USER_ERROR
      });
    })
  }
}

// Add user
const addUserAsync = (user) => {
  console.log('addUserAsync from actions_users', user);
  console.log('addUserAsync from actions_users id', user.id);
  return {
    type: types.ADD_USER,
    user
  };
}

export const addUser = (user) => {
  return (dispatch) => {
    return UsersApi.addUser(user)
    .then(response => {
        dispatch(addUserAsync(response))
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: types.ADD_USER_ERROR
      });
    })
  }
}

// Delete user
const deleteUserAsync = (id) => {
  return {
    type:  types.DELETE_USER,
    id    
  };
}

export const deleteUser = (id) => {
  console.log('deleteUser from actions_users', id);
  return (dispatch) => {
    return UsersApi.deleteUser(id)
    .then(() => {
      dispatch(deleteUserAsync(id))
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: types.DELETE_USER_ERROR
      });
    })
  }
}

// Update user
const updateUserAsync = (user) => {
  console.log('updateUserAsync from actions_users', user);
  console.log('updateUserAsync from actions_users id', user.id);
    return  {
      type: types.UPDATE_USER,
      user
    };
}

export const updateUser = (user) => {
  console.log('updateUser from actions_users', user);
  return (dispatch) => {
    return UsersApi.updateUser(user)
    .then(() => {
      console.log('updateUser, dispatch', user)
      dispatch(updateUserAsync(user))
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: types.UPDATE_USER_ERROR
      });
    })
  }
}

// Clear all messages
export const clearAllMessages = () => {
  return {
    type: types.CLEAR_ALL_MESSAGES
  }
}
