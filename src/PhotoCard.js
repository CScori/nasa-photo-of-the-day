import React from 'react'

const PhotoCard = props => {
    return (
        <div className='nasa' key={props.id}>
          <img className='nasa-photo' alt='chnge to src' src={props.img} />
          <p>{props.desc}</p>
        </div>
    )
}

export default PhotoCard
