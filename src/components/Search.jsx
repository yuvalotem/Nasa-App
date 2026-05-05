import Axios from 'axios';
import React, { useState } from 'react';
import MediaCard from './MediaCard';
import SearchBar from './SearchBar';

function useAsyncState(initialValue) {
    const [value, setValue] = useState(initialValue);
    const setter = x =>
        new Promise(resolve => {
            setValue(x);
            resolve(x);
        });
    return [value, setter];
}

function Search(props) {
    const [picArray, setPicArray] = useState([])
    const [input, setInput] = useAsyncState('')

    const handleChange = event => {
        setInput(event.target.value).then(async inp => {
            try {
                const response = await Axios.get(`https://images-api.nasa.gov/search?q=${inp}`)
                setPicArray([...response.data.collection.items])
            }
            catch {
                console.log('eror');
            }
        })
    }

    return (
        <div className="Search">
            <SearchBar value={input} handleChange={handleChange} />
            {picArray.map(p => <MediaCard
                 key={p.href}
                title={p.data[0].title}
                description={p.data[0].description}
                href={p.links ? p.links[0].href : null}
                showDescription={false} 
                saved={false}
                movePage={props.movePage}
                savePicToDB={props.savePicToDB}
                removePicFromDB={props.removePicFromDB} />)} 
        </div>
    );
}

export default Search;