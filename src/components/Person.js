import React from 'react';

class Person extends React.Component{
  render(){
    var p = this.props.data;
    return(
      <div>
        <div>{p.picture && p.picture.large ? <img src={p.picture.large} alt={`${p.name.first} ${p.name.last}`}/> : ''}</div>
        <div>{p.name.first} {p.name.last}</div>
        <div>{p.email}</div>
        <div>
          {p.registered ? <div>Joined <div>{p.registered}</div> </div> : ''}
        </div>
      </div>
    )
  }
}
export default Person;
