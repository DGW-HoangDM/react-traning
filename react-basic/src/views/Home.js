import React from 'react';
import {withRouter} from 'react-router';

//Stateless (function component)
function Home(props) {
  return (
    <>
      <div>
        <h1>Hello my Home Page</h1>
      </div>
    </>
  )
}

export default withRouter(Home);