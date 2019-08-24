import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from './components/header';
import OverviewMap from './components/map';
import Rating from './components/rating';

import dataJSON from './data/restaurants.json';

import './Restaurant.scss'


class RestaurantPage extends React.Component {

	constructor (props) {
		super(props);
		this.id = this.props.match.params.id;
		this.selectedRestaurant = '';
		this.openingHours = [];
	}

	getRestaurant() {
		const allRestaurants = dataJSON.restaurants;
		this.selectedRestaurant = allRestaurants.filter(restaurant => restaurant.id == this.id)[0];
		this.getOpeningHours();
	}

	getOpeningHours() {
		const days = Object.keys(this.selectedRestaurant.operating_hours);
		const time = Object.values(this.selectedRestaurant.operating_hours);
		
		const tmp = [];
		var i;
		for (i=0; i < days.length; i++) {
			tmp.push({'day': days[i], 'time': time[i]})
		} 

		this.openingHours = tmp;

	}

	init() {
		this.getRestaurant();
	}



	render () {

		this.init();

		return (
		    <div className="App">	
				<Header />
		    	<OverviewMap restaurants={[this.selectedRestaurant]} />

		    	<section id="RestDescription" className="container">
		    		<h2>{this.selectedRestaurant.name}</h2>
		    		<img src={`/img/${this.selectedRestaurant.photograph}`} alt={this.selectedRestaurant.name}/>


		    		<div className="rest-about">
		    			<h3>About</h3>

		    			<span className="icon-pseudo rest-ab-cuisine">{this.selectedRestaurant.cuisine_type}</span>
		    			<span className="icon-pseudo rest-ab-address">{this.selectedRestaurant.address}</span>

		    		</div>

		    		<div className="rest-openinghours">
		    			<h3>Operating Hours</h3>
		    			{
		    				this.openingHours.map(hours => (
		    					<div key={hours.day}>
		    						<span className="rest-op-day">{hours.day}:</span>
		    						<span className="rest-op-time">{hours.time}</span>
		    					</div>
		    				))

		    			}
		    		</div>

		    		<div className="rest-reviews">
		    			<h3>Reviews</h3>

		    			{ this.selectedRestaurant.reviews.map(review => (
		    				<div className="rest-review" key={review.name}>
		    					<span className="icon-pseudo rest-rv-name">{review.name}</span>
		    					<span className="icon-pseudo rest-rv-date">{review.date}</span>
		    					<Rating count={review.rating} />
		    					<p className="rest-rv-comment">{review.comments}</p>
		    				</div>

		    			))}

	    			</div>
		    	</section>
		    </div>
		)

	}

}

export default RestaurantPage;
