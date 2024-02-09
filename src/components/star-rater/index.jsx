import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import './styles.css';

export default function StarRater({ noOfStars = 5 }) {
  //jus dont use camelcasing for naming of default function

  const [rating, setRating] = useState(0); //at first we'll not select any star
  const [hover, setHover] = useState(0);

  function handleClick(currentIndex) {
    setRating(currentIndex);
    console.log(currentIndex);
  }

  function handleMouseHover(currentIndex) {
    setHover(currentIndex);
    console.log(currentIndex);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <div className="star">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;

        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseHover(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        );
      })}
    </div>
  );
}
