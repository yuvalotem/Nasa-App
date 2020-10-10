import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import Container from './components/Container';
import './App.css';


function App() {
  const [changePage, setChangePage] = useState(false)

  const movePage = () => setChangePage(!changePage)

  return (
    <Router>
      <div className="App">
        <NavBar movePage={movePage} />
        <Container changePage={changePage} movePage={movePage} />
      </div>
    </Router>
  );
}

export default App;
