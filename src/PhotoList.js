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
    return (
        <div className='map-list'>
            {photo.map(item => {
                return <PhotoCard key={item.id} 
                alt={item.title}
                src={item.url}
                description={item.explanation}
                date={date}
                />
            })}
            
                <button onClick={() setDate(2011-12-11)}>Change The Date</button>

        </div>
    )
}

export default PhotoList
