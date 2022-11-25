import './App.css';
import React from 'react';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '.../util/Yelp';

class App extends React.Component {
  searchYelp(term, location, sortBy) {
    console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`)
  }

  render() {
    return (
      <div className='App'>
        <h1>hungry bear</h1>
        <SearchBar searchYelp = {this.searchYelp}/>
        <BusinessList businesses={businesses} />
      </div>
    )
  } 
}

export default App;
