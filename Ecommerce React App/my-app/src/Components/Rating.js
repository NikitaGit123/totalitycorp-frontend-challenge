// Rating.js
import React from 'react';


// Rating page count strs from json and using loop print stsrs
const Rating = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= rating; i++) {
    stars.push(
      <span key={i} className={i <= rating ? 'star-filled' : 'star-empty'}>
        &#9733;
      </span>
    );
  }

  return <div className="rating">{stars}</div>;
};

export default Rating;
