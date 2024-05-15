import React from 'react'

class MyComponent extends React.Component {
  //define global state 
  state = {
    company: 'DGWA'
  }

  render() {
    return (
      <>
        <div>
          <h1>Hello, {this.props.name}</h1>
        </div>

        <div>
          <h1>Hello, {this.state.company}</h1>
        </div>
      </>
    )
  }
}

export default MyComponent;