import React from 'react';

import dataJSON from './restaurants.json';


class data {

	constructor() {

		

		this.allRestaurants = dataJSON.restaurants;
		this.allNeighborhood = [];
		this.allCuisine = [];
		this.selectedRestaurants = dataJSON.restaurants;
	}
	

	getAllRestaurants () {
		return this.selectedRestaurants;
	}

}

export { data }