import { FaStar } from "react-icons/fa";
import "../css/rating.css";
import PropTypes from "prop-types";

export default function Rating({ rating }) {
	const rate = [1, 2, 3, 4, 5];

	return (
		<div className="rating">
			{rate.map((index) => (
				<FaStar key={index} className={`rate ${index <= rating ? "color" : ""}`} />
			))}
		</div>
	);
}

Rating.propTypes = {
	rating: PropTypes.string.isRequired,
};
