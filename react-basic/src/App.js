import logo from './logo.svg';
import './App.scss';

import React from 'react';
import ListTodo from './views/todos/ListTodo';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import MyComponent from './views/expample/MyComponent';
// import MyComponentForm from './views/expample/MyComponentForm';
// import MyComponentFormCheckBox from './views/expample/MyComponentFormCheckBox';
// import ParentComponent from './views/expample/ParentComponent';

//class component
class App extends React.Component {
  render() {
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Simple TODO app with react by Hoang-DM
          </p>
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}

          {/* <MyComponent name="Hoang" />
          <div className="line"></div>

          <ParentComponent />
          <div className="line"></div>

          <MyComponentForm />
          <div className="line"></div>
          <MyComponentFormCheckBox />
          <div className="line"></div> */}


          <ListTodo />

        </header>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
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
