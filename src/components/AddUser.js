import React, { Component } from 'react';
import { Button, Form, Icon, Modal, Header, Transition } from 'semantic-ui-react';

class AddUser extends Component {
  render() {
    return (
      <Transition visible={this.props.openAddUserModal} animation='scale' duration={500} >
      <Modal
        open={this.props.openAddUserModal}
      >
        <Header icon='user' content='Add User' />
        <Form>
          <Modal.Content>
            <Form.Field>
              <label>First Name</label>
              <input
                autoFocus
                value={this.props.firstName}
                onChange={this.props.onFirstNameChange}
                type="text"
                placeholder="First Name"
              />
            </Form.Field>
            <Form.Field>
              <label>Last Name</label>
              <input
                value={this.props.lastName}
                onChange={this.props.onLastNameChange}
                type="text"
                placeholder="Last Name"
              />
            </Form.Field>
            <Form.Field>
              <label><Icon name='mail outline' /> Email</label>
              <input
                value={this.props.email}
                onChange={this.props.onEmailChange}
                type="text"
                placeholder="Email"
              />
            </Form.Field>
          </Modal.Content>
          <Modal.Actions>
            <Button
              type="button"
              basic
              primary
              onClick={this.props.handleAddUser}
            >Save
            </Button>
            <Button
              type="button"
              basic
              secondary
              onClick={this.props.handleCancelAddUser}
            >Cancel
            </Button>
          </Modal.Actions>
        </Form>
      </Modal>
      </Transition>
    );
  }
}

export default AddUser;
