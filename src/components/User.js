import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Button, Card, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import { updateUser} from '../actions/actions_users.js';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editUser: false,
      editFirstName: '',
      editLastName: '',
      editEmail: '',
      id: ''
    }
    this.toggleEditUser = this.toggleEditUser.bind(this);
    this.handleEditUser = this.handleEditUser.bind(this);
    this.handleSaveUser = this.handleSaveUser.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.updateUser = this.props.updateUser;
  }

  toggleEditUser() {
    this.setState(() => ({
      editUser: !this.state.editUser
    }))
  }

  handleEditUser() {
    this.setState(() => ({
      editFirstName: this.props.user.firstName,
      editLastName: this.props.user.lastName,
      editEmail: this.props.user.email,
      id: this.props.user.id
    }));
    this.toggleEditUser();
  }

  handleSaveUser() {
    let user = {
      firstName: this.state.editFirstName,
      lastName: this.state.editLastName,
      email: this.state.editEmail,
      id: this.state.id,
    }
    console.log('handleSaveUser from User', user);
    this.props.updateUser(user);
    this.toggleEditUser();
    this.setState(() => ({
      editFirstName: '',
      editLastName: '',
      editEmail: '',
      id: ''
    }));
  }

  handleFirstNameChange(e) {
    this.setState({
      editFirstName: e.target.value
    });
  }

  handleLastNameChange(e) {
    this.setState({
      editLastName: e.target.value
    });
  }

  handleEmailChange(e) {
    this.setState({
      editEmail: e.target.value
    });
  }

  render() {
    console.log('render from User this.props.data.email', this.props.user.email);
    const {firstName, lastName, email} = this.props.user;
    return(
      <Card>
        <Card.Content>
          <Card.Header>
            {this.state.editUser
              ? <input
                  size="12"
                  value={this.state.editFirstName}
                  onChange={this.handleFirstNameChange}
                />
              : <span>{firstName}</span>
            }
            &nbsp;
            {this.state.editUser
              ? <input 
                  size="12"
                  value={this.state.editLastName}
                  onChange={this.handleLastNameChange}
                />
              : <span>{lastName}</span>
            }
          </Card.Header>
          <Card.Description>
            {this.state.editUser
              ? <input 
                  value={this.state.editEmail}
                  onChange={this.handleEmailChange}
                />
              : <span><Icon name="mail outline" /> {email}</span>
            }
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            {this.state.editUser 
              ? <Button
                  basic
                  color="green"
                  onClick={ this.handleSaveUser }
                >
                  <Icon name="save" />
                  Save
                </Button>
                : <Button
                    basic
                    color="blue"
                    onClick={ this.handleEditUser }
                  >
                    <Icon name="edit" />
                    Edit
                  </Button>
            }
            {this.state.editUser 
              ? <Button
                  basic
                  color="orange"
                  onClick={ ()=> {this.toggleEditUser()}} 
                >
                  <Icon name="cancel" />
                  Cancel
                </Button>
              : <Button
                  basic
                  color="red"
                  onClick={ ()=> {this.props.handleDeleteUser(this.props.user.id)}} 
                >
                  <Icon name="trash outline" />
                  Delete
                </Button>
            }
          </div>
        </Card.Content>
      </Card>
    );
  }
}

User.propTypes = {
  user: PropTypes.object.isRequired,
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateUser: updateUser
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(User);
