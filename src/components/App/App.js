import './App.css';
import React from 'react';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '.../util/Yelp';

const business = {
  imageSrc: './PandaRed.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}

const businesses = [business, business, business, business, business, business];

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
