import React from "react";
import { Link } from "react-router-dom";

function Thumb ({title, location, id, cover}) {
    return (
            <Link to={`/lodging?id=${id}`}>
                <article className="linear-gradient">
                    <img src={cover} alt={title} />
                    <h3>{title}</h3>
                    <p>{location}</p>
                </article>
            </Link>
    )
}

export default Thumb