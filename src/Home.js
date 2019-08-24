import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from './components/header';
import OverviewMap from './components/map';
import { RestaurantThumb } from './components/restaurant';

import './Home.scss';

import dataJSON from './data/restaurants.json';


class Home extends React.Component {

	constructor (props) {

		super(props);

		this.DATABASE_URL = './data/restaurants.json';

		this.allRestaurants = [];
		this.allNeighborhood = [];
		this.allCuisine =[];
		this.selectedRestaurants = [];

		// state
		this.state = {
			filterNeighborhood: '',
			filterCuisine: '', 
		}

		// bind this for Event Handler
		this.handleNeighborhoodChange = this.handleNeighborhoodChange.bind(this);
		this.handleCuisineChange = this.handleCuisineChange.bind(this);
	}

	getRestaurants() {
		this.allRestaurants = dataJSON.restaurants;
		this.updateRestaurants();
	}

	getNeighborhoods() {
		const tmpNeighborhoods = this.allRestaurants.map((v, i) => this.allRestaurants[i].neighborhood)
        // Remove duplicates from neighborhoods
        this.allNeighborhood = tmpNeighborhoods.filter((v, i) => tmpNeighborhoods.indexOf(v) === i)
	}
	getCuisines() {
		const tmpCuisines = this.allRestaurants.map((v, i) => this.allRestaurants[i].cuisine_type)
        // Remove duplicates from neighborhoods
        this.allCuisine = tmpCuisines.filter((v, i) => tmpCuisines.indexOf(v) === i)
	}

	updateRestaurants() {

		// fetch data
		let cuisine = this.state.filterCuisine;
		let neighborhood = this.state.filterNeighborhood;
		let results = this.allRestaurants;

		// filter by cuisine
		if (cuisine) { 
          results = results.filter(r => r.cuisine_type === cuisine);
        }

        // filter by neighborhood
        if (neighborhood) { 
          results = results.filter(r => r.neighborhood === neighborhood);
        }
		
		// store result
		this.selectedRestaurants = results;
		//this.setState({selectedRestaurants: results})
	}

	handleNeighborhoodChange(event) {
		this.setState({filterNeighborhood: event.target.value});
		this.updateRestaurants();
	}

	handleCuisineChange(event) {
		this.setState({filterCuisine: event.target.value});
		this.updateRestaurants();
	}

	init() {
		this.getRestaurants();
		this.getNeighborhoods();
		this.getCuisines();
	}

	render() {

		this.init();

		return (
		    <div className="App">
				<Header />
				<OverviewMap restaurants={this.selectedRestaurants} />

		      	<form id="MapFilter" className="container" action="">
	      			<label>
	      				Neighborhood

	      				<select
		      				name="Neighborhood"
		      				onChange={this.handleNeighborhoodChange}
		      				value={this.state.filterNeighborhood}
		      				>
	      						<option value="">all</option>
		      					{this.allNeighborhood.map(neighborhood => (
		      						<option key={neighborhood} value={neighborhood}>{neighborhood}</option>
		      					))}
						</select>
	      			</label>
	      			<label>
	      				Cuisine
						<select
		      				name="Cuisine"
		      				onChange={this.handleCuisineChange}
		      				value={this.state.filterCuisine}
		      				>
	      						<option value="">all</option>
		      					{this.allCuisine.map(cuisine => (
		      						<option key={cuisine} value={cuisine}>{cuisine}</option>
		      					))}
						</select>	      			
					</label>
		      	</form>

		      	<section id="RestaurantPreview" className="container">
		      		{this.selectedRestaurants.map(restaurant => (
		      			<RestaurantThumb key={restaurant.id} restaurant={restaurant} />
		      		))}
		      	</section>
		    </div>	


	    )	
  	}
}

export default Home;
