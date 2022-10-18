import Hero from "../assets/hero.svg";
import "../css/banner.css"

export default function Banner() {
	return (
		<main className="hero-container">
			<div>
				<img src={Hero} alt="landscape"></img>
				<span className="centered">Chez vous, partout et ailleurs</span>
			</div>
		</main>
	);
  }
