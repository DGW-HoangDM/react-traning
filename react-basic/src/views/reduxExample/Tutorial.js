import React from 'react';
import { connect } from 'react-redux';

class Tutorial extends React.Component {
  handleDeleteUser = (user) => {
    console.log('handeDeleteUser', user)
  }
  render() {
    let users = this.props.userRedux;

    console.log('check props redux', this.props.userRedux);
    
    return (
      <>
        <h1>Hello Tutorial Redux</h1>
        <ul className="content list-group list-group-flush">
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
        <div className="line"></div>
      </>
    )
  }
}

// Map state to props
const mapStateToProps = (state) => ({
  userRedux: state.users
});

export default connect(mapStateToProps)(Tutorial);