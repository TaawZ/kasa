import LOGO from "../assets/LOGO.svg";
import "../css/footer.css";

export default function Footer() {
	return (
		<footer>
			<img src={LOGO} alt="Logo de kasa" />
			<p>© 2020 Kasa. All rights reserved</p>
		</footer>
	);
}
