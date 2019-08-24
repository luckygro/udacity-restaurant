import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import { Link } from 'react-router-dom';

const RestaurantMarker = ({item}) => {

	return (
		<Marker position={[item.latlng.lat, item.latlng.lng]}>
	      	<Popup><Link to={`/${item.id}`}>{item.name}</Link></Popup>
	    </Marker>
	)
}


const OverviewMap = ({restaurants}) => {

	let defaultPosition = [40.722216, -73.987501];

	return (

		// hide map from screen reader - redundant information, use restaurant overview instead
		<section id="OverviewMap" aria-hidden="true" tabIndex={-1}>
			<Map center={defaultPosition} zoom={12} scrollWheelZoom={false}>
				<TileLayer
				  url="https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.jpg70?access_token={mapboxToken}"
				  mapboxToken="pk.eyJ1IjoibHVja3lncm8iLCJhIjoiY2p6bXUwYzZuMGM0dTNjbngzN2wzZ2lmcSJ9.TXA1Ha-Cpot9JKZgmTp_bg"
				  attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
				  maxZoom={18}
				  id="mapbox.streets"
				/>

				{(restaurants.length > 0) ? (
					restaurants.map(restaurant => (
							<RestaurantMarker key={restaurant.id} item={restaurant} />
						)
					)
				) : null}

				

			</Map>
	 	</section>
	)
}

export default OverviewMap;
