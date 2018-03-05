export function peopleReducers(state= 
  {
  people:[]
}
, action){
  switch(action.type){

    case "GET_PEOPLE":
      return {...state, people:[...action.payload]}

    default:
      return state
  }
}