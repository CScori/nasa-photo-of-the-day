import React, { useState, useEffect } from "react";
import axios from "axios";
import Moment from 'react-moment';
import moment from 'moment';
import DatePicker from "react-datepicker";
 import "react-datepicker/dist/react-datepicker.css";
import {
 Button
} from 'reactstrap';
import PhotoCard from "./PhotoCard";


const PhotoList = () => {
    
  const [ data, setData ] = useState({});
    const [date, setDate] = useState(new Date())
    useEffect(() => {
      axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=A261geHF6ZKgFWv7rq3ayPIeA9doSWFZ5wEUtRyF`)
        .then((res) => setData(res.data));
    }, []);
  
    const toggleDate = (e) => {
      e.preventDefault();
      const input = document.getElementById('toggle');
      if (input.className.match('hidden')) {
        input.className = 'show';
      } else {
        input.className = 'hidden';
      }
    };
  
    const onChange = (date) => {
          setDate(date)
          // console.log(date)
          let formattedDate = moment(date).format('YYYY-MM-DD');
      console.log(formattedDate);
      axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=j8MvcwHy1qL4XgDz8qnCW7gFaf8MqNSuKALMSpAt&date=${formattedDate}`)
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    };

    
    return (

        <div className='map-list'>
            <PhotoCard 
            img = {data.url}
            title={data.title} 
            explanation={data.explanation}
            credit = {data.copyright}
                 />
            
          <Button className="dateSelector" onClick={toggleDate}>Choose</Button>
          <DatePicker selected={date} id="toggle" className="hidden" onChange={onChange}
      />
        </div>
    )
}

export default PhotoList


  
 
  