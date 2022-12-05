import React from "react";
import locations from "../data/locations";
import Carousel from "../components/Carousel";
import "../css/lodging.css";
import Tags from "../components/Tags";
import Rating from "../components/Rating";
import Dropdown from "../components/Dropdown";
import DropdownDesc from "../components/DropdownDesc";

const getParam = (param) => new URL(document.location).searchParams.get(param);

export default function Lodging() {
	const lodgingId = getParam("id");
	const currentLodging = locations.find((item) => item.id === lodgingId);
	console.log(currentLodging.rating);
	console.log(currentLodging.host.name);
	return (
		<main>
			<Carousel pictures={currentLodging.pictures} />
			<div className="infos-container">
				<div>
					<h2>{currentLodging.title}</h2>
					<span>{currentLodging.location}</span>
					<Tags tags={currentLodging.tags} />
				</div>
				<div className="host-infos">
					<div>
						<span>{currentLodging.host.name}</span>
						<img alt="host-portrait" className="host-portrait" src={currentLodging.host.picture} />
					</div>
					<Rating rating={currentLodging.rating} />
				</div>
			</div>
			<div className="dropdown-container">
				<Dropdown title="Equipements" content={currentLodging.equipments} myClass="accordion" />
				<DropdownDesc title="Description" content={currentLodging.description} myClass="accordion" />
			</div>
		</main>
	);
}
