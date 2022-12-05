import "../css/tags.css";
import PropTypes from "prop-types";

export default function Tags({ tags }) {
	return (
		<ul className="tag-container">
			{tags.map((tag, key) => (
				<li className="tag" key={key}>
					{tag}
				</li>
			))}
		</ul>
	);
}

Tags.propTypes = {
	tags: PropTypes.array.isRequired,
};
