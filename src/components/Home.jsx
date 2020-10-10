import Axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import MediaCard from './MediaCard';

function Home() {
  const [picInfo, setPicInfo] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await Axios.get('https://api.nasa.gov/planetary/apod?api_key=605kVLGZ0DXwVwtSCMQoSgzt1NOJZW0Fitb19a2X')
      setPicInfo({ ...response.data })
    }
    fetchData();
  }, [])

  return (
    <div className="Home">
      <MediaCard href={picInfo.hdurl} title={picInfo.title} description={picInfo.explanation} showDescription={true} />
    </div>
  );
}

export default Home;