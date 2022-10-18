import React from "react"
import Thumb from "../components/Thumb"
import locations from "../data/locations.json"
import '../css/gallery.css'

function Gallery() {
    return (
        <main className="gallery">
            {locations.map(({title, cover, id,}) => (          
                <Thumb
                    title={title}
                    cover={cover}
                    id={id}
                    key={id}
                />
            ))}
        </main>
    )
}
export default Gallery