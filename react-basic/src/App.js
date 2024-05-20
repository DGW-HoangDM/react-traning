import logo from './logo.svg';
import './App.scss';

import React from 'react';
import MyComponent from './views/expample/MyComponent';
import MyComponentForm from './views/expample/MyComponentForm';
import MyComponentFormCheckBox from './views/expample/MyComponentFormCheckBox';

//class component
class App extends React.Component {
  render() {
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

          <MyComponent name="Hoang" />

          <MyComponentForm />
          <div className="line"></div>
          <MyComponentFormCheckBox />
          <div className="line"></div>

        </header>
      </div>
    )
  }
}


//function component
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
