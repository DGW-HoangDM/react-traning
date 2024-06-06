import './App.scss';
import Header from './components/Header/Header';

import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <div className="app-container">
      <div className="header-content">
        <Header />
      </div>
      <div className="main-content">
        <div className="sidebar-content"></div>
        <div className="app-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
