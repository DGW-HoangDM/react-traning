import React from 'react'
import ChildComponent from './ChildComponent';

class MyComponent extends React.Component {
  //define global state 
  state = {
    company: 'DGWA'
  }

  handleClick = (e) =>{
    // console.log('handleClick', e);
    this.setState({
      company: 'DGWA Viet Nam'
    })
  }

  render() {
    console.log('state', this.state);
    return (
      <>
        <ChildComponent name="This my soon" age={25}/>

        <div>
          <h1>Hello, {this.props.name}</h1>
        </div>

        <div>
          <h1>Hello, {this.state.company}</h1>
        </div>

        <button onClick={(e) => this.handleClick(e)}>Click me</button>
      </>
    )
  }
}

export default MyComponent;