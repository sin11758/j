import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

import "../css/Reviews.css";

const reviews = [
  {
    "author_name": "John Smith",
    "author_url": "https://www.google.com/maps/contrib/12345678901234567890/reviews",
    "language": "en",
    "profile_photo_url": "https://lh3.googleusercontent.com/a-/A1234b5678cdeFGHijkLMnopqrstuvwxyZ0",
    "rating": 5,
    "relative_time_description": "2 weeks ago",
    "text": "Great service! They were very professional and finished the job quickly.",
    "time": 1649883125
  },
  {
    "author_name": "Jane Doe",
    "author_url": "https://www.google.com/maps/contrib/09876543210987654321/reviews",
    "language": "en",
    "profile_photo_url": "https://lh3.googleusercontent.com/a-/B9876c5432defGHIjklMNopqrsTUvwxyz1",
    "rating": 4,
    "relative_time_description": "3 months ago",
    "text": "Overall, I was happy with the work they did. The only downside was that they were a bit slow to respond to my questions.",
    "time": 1638478293
  },
  // Add more reviews here
];

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((currentReview + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentReview]);

  const handleArrowClick = (direction) => {
    const review = document.querySelector(".review");
  
    if (direction === "left") {
      review.classList.remove("slide-right");
      review.classList.add("slide-left");
  
      setCurrentReview(
        currentReview === 0 ? reviews.length - 1 : currentReview - 1
      );
    } else if (direction === "right") {
      review.classList.remove("slide-left");
      review.classList.add("slide-right");
  
      setCurrentReview((currentReview + 1) % reviews.length);
    }
  };
  

  const handleTransitionEnd = () => {
    const review = document.querySelector(".review");
    review.classList.remove("slide-left", "slide-right");
  };
  
  return (
    <div className="slideshow">
      <div className="arrow left" onClick={() => handleArrowClick("left")}>

        <ChevronLeft />
      </div>
        {/* <a href="https://www.google.com/maps/contrib/12345678901234567890/reviews" alt="google reviews"> */}
      <div className="review" onTransitionEnd={handleTransitionEnd}>
        <p className="text">{reviews[currentReview]?.text}</p>
        <p className="author">{reviews[currentReview]?.author_name}</p>
      </div>
        {/* </a> */}
      <div className="arrow right" onClick={() => handleArrowClick("right")}>
        <ChevronRight />
      </div>
    </div>
  );
  
};

export default Reviews;
