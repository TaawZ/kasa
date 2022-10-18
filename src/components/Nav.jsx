import LOGO from "../assets/LOGO.svg";
import { Link } from 'react-router-dom';
import "../css/nav.css"

export default function navBar() {
	return (
		<div className="page-header">
			<Link to='/'>
			<img src={LOGO} alt="nav-logo"></img>
			</Link>
			<nav>
				<Link to='/'>Accueil</Link>
            	<Link to='/about'>A Propos</Link>
			</nav>
		</div>
	);
}