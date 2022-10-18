import "../css/tags.css"

export default function Tags({tags}) {
return (
	<ul className="tag-container">
		{tags.map((tag, key) => <li className="tag" key={key}>{tag}</li>)}
	</ul>
	)
}