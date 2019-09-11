import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";

const PhotoList = () => {
    const [photo, setPhoto] = useState([]);

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        .then(res => {
            const item = res.data
            console.log('return from api', item)
            setPhoto(item)
        })
        .catch(err => {
            console.log('api err or timeout', err)
        })
    }, [])
    return (
        <div className='map-list'>
            
        </div>
    )
}

export default PhotoList
