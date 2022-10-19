import "../css/404.css"
import { Link } from 'react-router-dom';

export default function Error() {
	return (
	  <main className="error-page">
		<h1>404</h1>
		<h2>Oups! La page que vous demandez n'existe pas.</h2>
		<Link to='/'>
			<h3 className="return">Retourner sur la page d'accueil</h3>
		</Link>
	  </main>
	);
  }