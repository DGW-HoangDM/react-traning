import logo from './logo.svg';
import './App.scss';

import React from 'react';
import ListTodo from './views/todos/ListTodo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import MyComponent from './views/expample/MyComponent';
// import MyComponentForm from './views/expample/MyComponentForm';
// import MyComponentFormCheckBox from './views/expample/MyComponentFormCheckBox';
// import ParentComponent from './views/expample/ParentComponent';
import NavComponent from './views/routers/NavComponent';
import Home from './views/Home';
import Example from './views/expample/Example';
import Topics from './views/Topics/Topics';
import ListUsers from './views/Users/ListUsers';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//class component
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">

            <NavComponent />
            <div className="line"></div>

            <img src={logo} className="App-logo" alt="logo" />
            

            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/todo">
                <ListTodo />
              </Route>
              <Route path="/example">
                <Example />
              </Route>
              <Route path="/topics">
                <Topics />
              </Route>
              <Route path="/user">
                <ListUsers />
              </Route>
            </Switch>
          </div>
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
      </Router>
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
