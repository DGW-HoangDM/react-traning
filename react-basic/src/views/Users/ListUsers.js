import React from 'react';
import axios from 'axios';
import {
  Link
} from "react-router-dom";

class ListUsers extends React.Component {
  state = {
    listUsers: []
  }

  async componentDidMount() {
    let res = await axios.get('https://reqres.in/api/users?page=1');
    this.setState({
      listUsers: res && res.data && res.data.data ? res.data.data : []
    })
  }

  render() {
    let { listUsers } = this.state;
    return (
      <>
        <h2>Hello World List user</h2>

        <div className="container">
          <div className="row g-3">
            {
              listUsers && listUsers.length > 0 &&
              listUsers.map((user) => {
                return (
                  <div className="col-4" key={user.id}>
                    <div className="card">
                      <Link to={`/user/${user.id}`}>
                        <img src={user.avatar} className="card-img-top" alt={`${user.first_name}${user.last_name}`} />
                        <div className="card-body">
                          <h5 className="card-title">{user.first_name} {user.last_name}</h5>
                          <p className="card-text">{user.email}</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="line"></div>
      </>
    )
  }
}

export default ListUsers;