import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Container, Card, Message, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import { getUsers, addUser, deleteUser, clearAllMessages } from '../actions/actions_users';
import User from './User';
import AddUser from './AddUser';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openAddUserModal: false,
      addUserFirstName: '',
      addUserLastName: '',
      addUserEmail: ''
    }
    this.handleAddUser = this.handleAddUser.bind(this);
    this.handleToggleAddUserModal = this.handleToggleAddUserModal.bind(this);
    this.handleAddUserFirstNameChange = this.handleAddUserFirstNameChange.bind(this);
    this.handleAddUserLastNameChange = this.handleAddUserLastNameChange.bind(this);
    this.handleAddUserEmailChange = this.handleAddUserEmailChange.bind(this);
    this.handleDeleteUser = this.handleDeleteUser.bind(this);
    this.handleClearAllMessages = this.handleClearAllMessages.bind(this);
    this.handleCancelAddUser = this.handleCancelAddUser.bind(this);
  }

  handleToggleAddUserModal() {
    console.log('handleToggleAddUserModal', this.state.openAddUserModal);
    this.setState((state, props) => ({ openAddUserModal: !this.state.openAddUserModal }));
  }

  clearForm() {
    this.setState((state, props) => ({
      addUserFirstName: '',
      addUserLastName: '',
      addUserEmail: ''
    }));
  }

  handleCancelAddUser() {
    this.handleToggleAddUserModal();
    this.clearForm();
  }

  handleAddUser() {
    console.log('handleAddUser');
    const user = {
      firstName: this.state.addUserFirstName,
      lastName: this.state.addUserLastName,
      email: this.state.addUserEmail
    };
    this.props.addUser(user);
    this.handleToggleAddUserModal();
    this.clearForm();
  }

  handleAddUserFirstNameChange(e) {
    this.setState({
      addUserFirstName: e.target.value
    });
  }

  handleAddUserLastNameChange(e) {
    this.setState({
      addUserLastName: e.target.value
    });
  }

  handleAddUserEmailChange(e) {
    return this.setState({
      addUserEmail: e.target.value
    });
  }

  handleDeleteUser(id) {
      console.log('handleDeleteUser from Users.js', id);
      this.props.deleteUser(id);
  }

  handleClearAllMessages() {
    this.props.clearAllMessages();
  }

  componentDidMount() {
    this.props.getUsers();
  }

  render(){
    return(
      <Container>

        <h1>Users</h1>
        <Button basic primary onClick={this.handleToggleAddUserModal}>Add User</Button>
          <div className="message-area">
            {!!this.props.errorMessage &&
              <Message
                error
                header='ERROR MESSAGE:'
                content={this.props.errorMessage}
                onDismiss={this.handleClearAllMessages}
              />}
            {!!this.props.successMessage && 
              <Message
              success
              header='SUCCESS MESSAGE:'
              content={this.props.successMessage}
              onDismiss={this.handleClearAllMessages}
            />}
          </div>
        <Card.Group>
          <UsersList
            users={this.props.users}
            handleDeleteUser={this.handleDeleteUser}
          />
        </Card.Group>
        <AddUser
          handleAddUser={this.handleAddUser}
          openAddUserModal={this.state.openAddUserModal}
          handleCancelAddUser={this.handleCancelAddUser}
          onFirstNameChange={this.handleAddUserFirstNameChange}
          onLastNameChange={this.handleAddUserLastNameChange}
          onEmailChange={this.handleAddUserEmailChange}
          firstName={this.state.addUserFirstName}
          lastName={this.state.addUserLastName}
          email={this.state.addUserEmail}
        />
      </Container>
    )
  }
}

const UsersList = (props) => props.users.map((user) => {
  console.log('UsersList', user.id)
  return(
    <User
      key={user.id}
      user={user}
      handleDeleteUser={props.handleDeleteUser}
    />
  )
});

Users.propTypes = {
  users: PropTypes.array.isRequired,
  errorMessage: PropTypes.string.isRequired,
  successMessage:PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    errorMessage: state.messages.errorMessage, 
    successMessage: state.messages.successMessage
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getUsers: getUsers,
    addUser: addUser,
    deleteUser: deleteUser,
    clearAllMessages: clearAllMessages
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
