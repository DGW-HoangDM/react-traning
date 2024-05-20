import React from 'react'

//StateFull (class component)
// class ChildComponent extends React.Component {
//   render() {
//     console.log('check props:', this.props);
//     //ES6 Destructuring
//     let {name, age} = this.props;

//     return (
//       <>
//         <div>
//           <h1>Hello my child, <i>{name}-{age}</i></h1>
//         </div>
//       </>
//     )
//   }
// }

//Stateless (function component)
function ChildComponent(props) {
  console.log('check props stateless:', props);
  //ES6 Destructuring
  let {name, age} = props;
  
  return (
    <>
      <div>
        <h1>Hello my child, <i>{name}-{age}</i></h1>
      </div>
    </>
  )
}

export default ChildComponent;