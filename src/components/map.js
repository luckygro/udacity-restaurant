import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'



const RestaurantMarker = ({item}) => {

	return (
		<Marker position={[item.latlng.lat, item.latlng.lng]}>
	      	<Popup>{item.name}</Popup>
	    </Marker>
	)
}


const OverviewMap = ({restaurants}) => {

	let defaultPosition = [];

	const checkDefaultPosition = () => {

		if (restaurants.len > 1) {
			defaultPosition =  [40.722216, -73.987501];
		} else {
			defaultPosition = [restaurants[0].latlng.lat, restaurants[0].latlng.lng];
		}
	}

	checkDefaultPosition();


	return (
		<section id="OverviewMap">
			<Map center={defaultPosition} zoom={13} scrollWheelZoom={false}>
				<TileLayer
				  url="https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.jpg70?access_token={mapboxToken}"
				  mapboxToken="pk.eyJ1IjoibHVja3lncm8iLCJhIjoiY2p6bXUwYzZuMGM0dTNjbngzN2wzZ2lmcSJ9.TXA1Ha-Cpot9JKZgmTp_bg"
				  attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
				  maxZoom={18}
				  id="mapbox.streets"
				/>

				{restaurants.map(restaurant => (
						<RestaurantMarker key={restaurant.id} item={restaurant} />
					)
				)}

			</Map>
	 	</section>
	)
}

export default OverviewMap;
