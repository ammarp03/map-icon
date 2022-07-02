import React, { useState } from "react";
import "./Demo4.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import cities from "../data/cities.json";
import osm from "./map-provider";
import MarkerClusterGroup from "react-leaflet-markercluster";
import '../App.css'
const icons = {};
const fetchIcon = (count, size, color) => {
	if (!icons[count]) {
		icons[count] = L.divIcon({
			html: `<div class="cluster-marker" style="width: ${size}px; height: ${size}px; background: ${color};">
		  ${count}
		</div>`,
		});
	}
	return icons[count];
};

const cuffs = new L.Icon({
	iconUrl: "/handcuffs.svg",
	iconSize: [25, 25],
});

const Demo4 = () => {
	const position = [43.59059, 6.2944];
	const [items, setItems] = useState(cities);

	const filterItem = (categItem, color) => {
		const updatedItems = cities.filter((curElem) => {
			return curElem.category === categItem && curElem.color === color;
		});

		setItems(updatedItems);
	};

	return (
		<div>
			<div className="menu-tabs container">
				<div className="menu-tab d-flex justify-content-around">
					<button
						className="btn btn-warning"
						onClick={() => filterItem("Gastronomie","#E78587")}
					>
						Gastronomie
					</button>
					<button
						className="btn btn-warning"
						onClick={() => filterItem("Soleil","#d0d929")}
					>
						Soleil
					</button>
					<button
						className="btn btn-warning"
						onClick={() => filterItem("Littoral","#29a7d9")}
					>
						Littoral
					</button>
					<button
						className="btn btn-warning"
						onClick={() => filterItem("Dev-Durable","#36bf56")}
					>
						Dev Durable
					</button>
					<button
						className="btn btn-warning"
						onClick={() => filterItem("Bien","#bf36a8")}
					>
						Bien-être
					</button>
				</div>
			</div>
			<div className="body">
				<MapContainer className="Map" center={position} zoom={4}>
					<TileLayer
						attribution={osm.maptiler.attribution}
						url={osm.maptiler.url}
					/>

					{items.map((city, idx) => (
						<Marker
							position={[city.Latitude, city.Longitude]}
							key={city.Latitude}
							icon={fetchIcon(city.Column1, 10, city.color)}
						>
							<Popup>
								<b>{city.Catégorie}</b>
							</Popup>
						</Marker>
					))}
				</MapContainer>
			</div>
		</div>
	);
};

export default Demo4;
// const markerIcon = new L.icon({
// 	iconUrl: require("../Resources/number-icon-8106.png"),
// const icons = {};
// const fetchIcon = (count, size) => {
// 	if (!icons[count]) {
// 		icons[count] = L.divIcon({
// 			html: `<div class="cluster-marker" style="width: ${size}px; height: ${size}px;">
// 		  ${count}
// 		</div>`,
// 		});
// 	}
// 	return icons[count];
// };
