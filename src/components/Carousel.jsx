import React, {useState} from "react";
import chevronLeft from "../assets/chevronLeft.svg"
import chevronRight from "../assets/chevronRight.svg"


export default function Carousel({pictures}) {
	const [count, setCount] = useState(0);
	
	return (
		<div className="carousel">
			<img src={pictures[count]} className="carousel-img" alt="carousel-img"/>
			{pictures.length !==  1 && <button className="prev" onClick={() => setCount(count === 0 ?  pictures.length  - 1 : count - 1)}><img className="prev-icon" alt="prev-icon" src={chevronLeft} /></button>}
			{pictures.length !==  1 && <button className="next" onClick={() => setCount(count === pictures.length - 1 ? 0 : count + 1)}><img className="next-icon" alt="next-icon" src={chevronRight} /></button>}
			<span className="index">{count + 1} / {pictures.length}</span>
		</div>
	)
}