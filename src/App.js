import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import RestaurantPage from './Restaurant';
import Home from './Home';

import './App.scss';

import dataJSON from './data/restaurants.json';

class AppRouter extends React.Component {

	render() {
		return (
			<Router>
				<Route exact path="/" component={Home} />
		        <Route path="/:id" component={RestaurantPage} />
			</Router>
		)
	}

}

export default AppRouter;
