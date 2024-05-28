import React from 'react';
import { connect } from 'react-redux';

class Tutorial extends React.Component {
  handleDeleteUser = (user) => {
    //console.log('handleDeleteUser', user);
    this.props.deleteUserRedux(user);
  }

  handleCreateUser = () => {
    //console.log('handleCreateUser');
    this.props.createUser();
  }

  render() {
    let users = this.props.userRedux;

    return (
      <>
        <h1>Hello Tutorial Redux</h1>
        <ul className="content list-group list-group-flush mb-3">
          {
            users && users.length > 0 &&
            users.map((user, index) => {
              return (
                <li className="list-group-item d-flex justify-content-between" key={user.id}>
                  <span>{index + 1} - {user.name}</span>
                  <button className="btn btn-danger" type="button" onClick={(e) => this.handleDeleteUser(user)}>Delete</button>
                </li>
              )
            })
          }
        </ul>
        <button className="btn btn-primary" type="button" onClick={() => this.handleCreateUser()}>Add user</button>
        <div className="line"></div>
      </>
    )
  }
}

// Map state to props
const mapStateToProps = (state) => {
  return {
    userRedux: state.users
  }
};

// Map dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
    createUser: () => dispatch({ type: 'CREATE_USER'})
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Tutorial);