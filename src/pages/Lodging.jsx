import React from "react";
import locations from "../data/locations";
import Carousel from "../components/Carousel";
import "../css/lodging.css"
import Tags from "../components/Tags";
import Rating from "../components/Rating"

const getParam = (param) => new URL(document.location).searchParams.get(param);

export default function Lodging() {
	const lodgingId = getParam('id');
	const currentLodging = locations.find((item) => item.id === lodgingId);
	console.log(currentLodging.rating)
	return (
		<main>
			<Carousel
			pictures={currentLodging.pictures} />
			<div className="infos">
				<div>
					<h2>{currentLodging.title}</h2>
					<span>{currentLodging.location}</span>
				</div>
				<div>
					<div className="host-infos">
						<span>{currentLodging.host.name}</span>
						<img className="host-portrait" src={currentLodging.host.picture}/>
					</div>
					<Rating rating={currentLodging.rating} />
				</div>
				
			</div>
			<div>
				
			</div>
			<Tags 
			tags = {currentLodging.tags}/>
		</main>
	)
}