import arrowDown from '../assets/arrowDown.svg'
import arrowUp from '../assets/arrowUp.svg'
import React, { useState } from 'react';
import '../css/dropdown.css'

export default function Dropdown({title, content}) {

	const [isActive, setIsActive] = useState(false);

return (
	<div className='accordion'>
		<div className='accordion-title'  onClick={() => setIsActive(!isActive)}>
			<span>{title}</span>
			<div>{isActive ? <img alt="arrow-up" src={arrowUp}></img> : <img alt="arrow-down" src={arrowDown}></img>}</div>
		</div>
		{isActive && <div className='accordion-content'>
			<ul className='accordion-list'>
				{content.map((element, key) => <li key={key}>{element}</li>)}
			</ul>
			</div>}
		</div>
	)
}