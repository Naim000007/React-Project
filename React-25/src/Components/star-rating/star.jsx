import React, { useState } from 'react';
import "./star.css";
import { FaStar } from 'react-icons/fa';

const Star = ({ noOfStars = 5 }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleClick = (index) => {
        if (index === 1) {
            setRating(0)
        }
        if (rating === index) {
            setRating(0);  // Reset to zero if the same star is clicked
        } else {
            setRating(index);
        }
    };

    const handleMouseOver = (index) => {
        setHover(index);
    };

    const handleMouseLeave = () => {
        setHover(0);
    };

    return (
        <div className='star-rating'>
            {[...Array(noOfStars)].map((_, index) => (
                <FaStar
                    key={index}
                    onClick={() => handleClick(index + 1)}
                    onMouseMove={() => handleMouseOver(index + 1)}
                    onMouseLeave={handleMouseLeave}
                    size={40}
                    color={(hover || rating) > index ? "yellow" : "grey"}
                />
            ))}
            {/* {rating === 0 && <div className='no-rating'>No rating</div>} */}
        </div>
    );
};

export default Star;
