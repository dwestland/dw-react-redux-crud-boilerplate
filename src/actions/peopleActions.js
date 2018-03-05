export function getPeople(list){
  return function(dispatch){
    fetch('https://randomuser.me/api/?nat=us&results=3').then(function(response) {
      return response.json();
    }).then(function(response) {
      dispatch({type:"GET_PEOPLE", payload: list ? [...list,...response.results] : response.results})
    }).catch(function(error) {
      console.log('Error', error)
    });
  }
}