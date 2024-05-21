import React from 'react'
import ChildComponent from './ChildComponent';

class MyComponent extends React.Component {
  //define global state 
  state = {
    company: 'DGWA',
    isChecked: false,
  }

  handleClick = (e) =>{
    // console.log('handleClick', e);
    this.setState({
      company: 'DGWA Viet Nam',
    })
  }

  handleShowContent = (e) => {
    this.setState({
      isChecked: !this.state.isChecked,
    })
  }

  render() {
    // console.log('state', this.state);
    let {isChecked} = this.state;

    return (
      <>
        <ChildComponent name="This my soon" age={25}/>

        <div>
          <h1>Hello, {this.props.name}</h1>
        </div>

        <div>
          <h1>Hello, {this.state.company}</h1>
        </div>
        <div className="line"></div>

        {
          !isChecked ? <button onClick={(e) => this.handleShowContent(e)}>Show content</button>
          :
          <>
            <div>
              <h1>The content</h1>
            </div>
            <button onClick={(e) => this.handleShowContent(e)}>Hide content</button>
          </>
        }
        

        <div className="line"></div>
        <button onClick={(e) => this.handleClick(e)}>Click me</button>
        
      </>
    )
  }
}

export default MyComponent;