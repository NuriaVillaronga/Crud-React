import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Content from './Components/Content';
import Header from './Components/Header';

function App() {

  return (<Router>
        <div className="container-fluid container-panel">
          <Header/>
          <Content/>
      </div>
  </Router>
  );
}

export default App;
