import React from 'react';

const business = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}

class Business extends React.Component {
  render() {
    return (
    <div className='Business'>
    <div className ='image-container'>

    </div>
    <h2>{business.name}</h2>
    <div className='Business-information'>
      <div className='Business-address'>

      </div>
      <div className='Business-reviews'>

      </div>
    </div>
    </div>
    )
  }
}