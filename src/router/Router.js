import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Lodging from "../pages/Lodging";
import Error from "../pages/404";
import About from "../pages/About";
import Nav from "../components/Nav";
import "../css/app.css";

function Router() {
	return (
		<div className="App">
			<div className="app-container">
				<Nav />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/lodging" element={<Lodging />} />
					<Route path="/about" element={<About />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</div>
		</div>
	);
}

export default Router;
