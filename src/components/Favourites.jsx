import React from 'react';
import MediaCard from './MediaCard';

function Favourites(props) {
    let { savedPics } = props
    let showDescription = false
    let saved = true

    if (props.match) {
        savedPics = savedPics.filter(p => p._id === props.match.params.id)
        showDescription = true
        saved = undefined
    }

    return (
        <div className="Favourites">
            <h3>Favourites</h3>
            {savedPics.map(p => <MediaCard
                key={p._id}
                title={p.title}
                href={p.href}
                description={p.description}
                id={p._id}
                showDescription={showDescription}
                saved={saved}
                removePicFromDB={props.removePicFromDB}
                savePicToDB={props.savePicToDB} />)}

        </div>
    );
}

export default Favourites;