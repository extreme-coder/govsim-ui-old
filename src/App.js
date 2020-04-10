import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './styles/sb-admin-2.css'
import Routes from './Routes'


import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";


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