import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


import ContactList from './components/ContactList';
import AddContact from './components/AddContact';

const App = () => {
  return (
    
      <Router>
        <div>
        <center><h1>Hi, Welcome to Contact Book</h1></center>
          <nav>
            <ul>
             <li>
                <Link to="/">Home Page</Link>
              </li>
              <li>
                <Link to="/add">Add Contact</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<ContactList />} />
            <Route path="/add" element={<AddContact />} />
          </Routes>
        </div>
      </Router>
  );
};

export default App;
