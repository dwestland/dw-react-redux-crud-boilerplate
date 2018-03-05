const ROOT_URL = 'http://rest.learncode.academy/api/xanadu/users/';
// The free practice RESTful API brought to you by LearnCode.academy

class UsersApi {

  static getUsers() {
    return fetch(ROOT_URL, {
      method: 'GET'
      })
      .then (response => {
        if(response.ok){
          return response.json();
        } else {
          throw new Error();
        }
      })
  }

  static addUser(user) {
    return fetch(ROOT_URL, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: new Headers({
        'content-type': 'application/json'
      })
    })
    .then (response => {
      if(response.ok){
        return response.json();
      } else {
        throw new Error();
      }
    });
  }

  static deleteUser(id) {
    return fetch(ROOT_URL + id, {
      method: 'DELETE',
      body: JSON.stringify(),
      headers: new Headers({
        'content-type': 'application/json'
      })
    })
    .then (response => {
      if(response.ok){
        return response;
      } else {
        throw new Error();
      }
    })
  }

  static updateUser(user) {
    let id = user.id
    return fetch(ROOT_URL + id, {
      method: 'PUT',
      body: JSON.stringify(user),
      headers: new Headers({
        'content-type': 'application/json'
      })
    })
    .then (response => {
      if(response.ok){
        return response;
      } else {
        throw new Error();
      }
    })
  }
  
}

export default UsersApi
