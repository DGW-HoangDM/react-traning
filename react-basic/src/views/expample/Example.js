import React from 'react'

import MyComponent from './MyComponent';
import ParentComponent from './ParentComponent';
import MyComponentForm from './MyComponentForm';
import MyComponentFormCheckBox from './MyComponentFormCheckBox';

class Example extends React.Component {
  render() {
    return (
      <>
        <MyComponent name="Hoang" />
        <div className="line"></div>

        <ParentComponent />
        <div className="line"></div>

        <MyComponentForm />
        <div className="line"></div>
        <MyComponentFormCheckBox />
        <div className="line"></div>
      </>
    )
  }
}

export default Example;