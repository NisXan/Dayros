import React from 'react';
import { Link, useParams } from 'react-router-dom';

import './PhotoDetails.css';

const PhotoDetails = (props) => {
  const { images, likedPhoto } = props;
  const { id } = useParams();

  let date = images[id].created_at[8] + images[id].created_at[9] + '.' + images[id].created_at[5] + images[id].created_at[6] + '.' + images[id].created_at[0] + images[id].created_at[1] + images[id].created_at[2] + images[id].created_at[3];
  let liked = (images[id].liked_by_user) ? 'btn btn-like liked' : 'btn btn-like';  
  
  let details = (
    <div className="details__container">
      <div className="details__container--info">
        <a href={images[id].user.links.html} className="author" >
          <img src={images[id].user.profile_image.small} alt={images[id].user.name} className="author__img" />
          <span className="author__name" >                
            {images[id].user.name}
          </span>
        </a>
        <time className="date" dateTime={images[id].created_at}>{date}</time>
        <button className={ liked } type="button" onClick={event => likedPhoto(images[id].id)}>{images[id].likes}</button>
      </div>      
      <img 
        className="details__container--img"
        src={images[id].urls.regular}
        alt={images[id].description} />
    </div>
  )

  return (
    <div className="main-container">
      <Link to="/" className="back-link">Назад</Link>      
      {details}
    </div>
  )
}

export default PhotoDetails;