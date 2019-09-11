import React from 'react'

const PhotoCard = props => {
    return (
        <div className='nasa' key={props.id}>
          <img className='nasa-photo' alt={props.title} src={props.url} />
          <p>Image Description: {props.explanation}</p>
        </div>
    )
}

export default PhotoCard
