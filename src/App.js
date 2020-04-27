import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './styles/sb-admin-2.css'
import {
  BrowserRouter as Router
} from 'react-router-dom';
import Routes from './Routes'

function App() {
  return (
    <Router>
      <div>
        <Routes />
      </div>
    </Router>
  );
}

export default App;
