import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantThumb = ({restaurant}) => (

	<Link to={`/${restaurant.id}`}>
	  <div className="restaurant-thumb">
	  	<img src={`/img/${restaurant.photograph}`} alt={restaurant.name} />
	  	<div className="restaurant-content">
		    <h4>{restaurant.name}</h4>
		    <span className="restaurant-neighborhood">{restaurant.neighborhood}</span>
		    <span className="restaurant-address">{restaurant.address}</span>
	    </div>
	  </div>
  </Link>
);

export { RestaurantThumb };
