import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import Search from './Search';
import Favourites from './Favourites';
import Axios from 'axios';

function Container(props) {
    const [savedPics, setSavedPics] = useState([])

    useEffect(() => {
        const fetchPicsFromDB = async () => {
            const response = await Axios.get('http://localhost:4000/images')
            setSavedPics([...response.data])
        }
        fetchPicsFromDB()
    }, [props.changePage])

    const savePicToDB = async pic => {
        const response = await Axios.post('http://localhost:4000/image', pic)
        return response.data._id
    }

    const removePicFromDB = async id => {
        await Axios.delete('http://localhost:4000/image/' + id)
    }

    return (
        <div className="Container">
            <Route exact path='/' component={Home} />
            <Route exact path='/search' render={() => <Search
                savePicToDB={savePicToDB}
                removePicFromDB={removePicFromDB}
                movePage={props.movePage} />} />
            <Route exact path='/favourites' render={() => <Favourites
                savedPics={savedPics}
                removePicFromDB={removePicFromDB}
                savePicToDB={savePicToDB} />} />
            <Route exact path='/favourites/:id' render={({ match }) => <Favourites
                match={match}
                savedPics={savedPics} />} />
        </div>
    );
}

export default Container;