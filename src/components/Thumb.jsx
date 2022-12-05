import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
function Thumb({ title, location, id, cover }) {
	return (
		<Link to={`/lodging?id=${id}`}>
			<article className="linear-gradient">
				<img src={cover} alt={title} />
				<h3>{title}</h3>
				<p>{location}</p>
			</article>
		</Link>
	);
}

Thumb.propTypes = {
	title: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	cover: PropTypes.string.isRequired,
};
export default Thumb;
