import './App.css';
import React from 'react';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '.../util/Yelp';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {businesses: []}
    this.searchYelp = this.searchYelp.bind(this)
  };

  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then(businesses => {
      this.setState({businesses: businesses})
    })
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
};

export default App;
