import DropdownDesc from "../components/DropdownDesc";
import "../css/about.css"
import Banner from "../components/Banner"

export default function Home() {
	return (
		<main>
			<Banner/>
			<div className="about-container">
				<DropdownDesc 
				title="Fiabilité"
				content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
				myClass="about"/>
				<DropdownDesc 
				title="Respect"
				content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
				myClass="about"/>
				<DropdownDesc 
				title="Service"
				content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
				myClass="about"/>
				<DropdownDesc 
				title="Sécurité"
				content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
				myClass="about"/>
			</div>
	</main>
	);
  }