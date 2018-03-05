import React from 'react';
import {connect} from 'react-redux';
import {getPeople} from '../actions/peopleActions';
import {bindActionCreators} from 'redux';

import Person from './Person';

class People extends React.Component{
  componentDidMount(){
    this.props.getPeople()
  }

  render(){
    const list = this.props.people.map(function(peopleArr,index){
      return(
          <Person
            key={index}
            id={index}
            data={peopleArr}
          />
      )
    });

    return(
        <div id="peopleListWrapper">
          <h1>People</h1>
          {list}
        </div>
    )
  }
}

function mapStateToProps(state){
  return{
    people: state.people.people
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getPeople:getPeople
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(People);