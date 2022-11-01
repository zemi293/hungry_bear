import logo from './logo.svg';
import './App.css';
import React from 'react';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

function App() {
  render(); {
    return (
      <div className='App'>
        <h1>hungry bear</h1>
        <SearchBar />
        <BusinessList />
      </div>
    )
  } 
}

export default App;
