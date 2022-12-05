import arrowDown from "../assets/arrowDown.svg";
import arrowUp from "../assets/arrowUp.svg";
import React, { useState } from "react";
import PropTypes from "prop-types";
import "../css/dropdown.css";

export default function Dropdown({ title, content, myClass }) {
	const [isActive, setIsActive] = useState(false);

	return (
		<div className={myClass}>
			<div className="accordion-title" onClick={() => setIsActive(!isActive)}>
				<span>{title}</span>
				<div>{isActive ? <img alt="arrow-up" src={arrowUp}></img> : <img alt="arrow-down" src={arrowDown}></img>}</div>
			</div>
			{isActive && <div className="accordion-content">{content}</div>}
		</div>
	);
}

Dropdown.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	myClass: PropTypes.string.isRequired,
};
