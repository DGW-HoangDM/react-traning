import React from 'react';
import axios from 'axios';
import { withRouter } from "react-router";

class UserDetail extends React.Component {
  state = {
    userDetail: {}
  }

  async componentDidMount() {
    let { id } = this.props.match.params;
    let res = await axios.get(`https://reqres.in/api/users/${id}`);

    console.log('res', this.props)
    if(res.status === 200) {
      this.setState({
        userDetail: res && res.data && res.data.data ? res.data.data : {}
      })
    }
  }

  render() {
    let { userDetail } = this.state;
    let isEmptyObject = Object.keys(userDetail).length === 0;
    return (
      <>
        <h2>Hello World user detail</h2>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-4">
                {
                  isEmptyObject === false ?
                  <div className="card">
                    <img src={userDetail.avatar} className="card-img-top" alt={`${userDetail.first_name}${userDetail.last_name}`} />
                    <div className="card-body">
                      <h5 className="card-title">{userDetail.first_name} {userDetail.last_name}</h5>
                      <p className="card-text">{userDetail.email}</p>
                    </div>
                  </div>
                  : 
                  <h3>User empty</h3>
                }
              </div>
            </div>
          </div>
          <div className="line"></div>
      </>
    )
  }
}

export default withRouter(UserDetail);