import React, { useState, useEffect } from "react";
import axios from "axios";

import PhotoCard from "./PhotoCard";

const PhotoList = () => {
    const [photo, setPhoto] = useState([]);
    const [date, setDate] = useState('2012-03-14')

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
        .then(res => {
            const item = res.data
            console.log('return from api', item)
            setPhoto(item)
        })
        .catch(err => {
            console.log('api err or timeout', err)
        })
    }, [date])
     setDate(2011-12-11)
    return (

        <div className='map-list'>
            <PhotoCard key={photo.id} 
                alt={photo.title}
                src={photo.url}
                description={photo.explanation}
                date={date} />

        </div>
    )
}

export default PhotoList


  
 
  