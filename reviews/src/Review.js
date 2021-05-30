import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  // default state we want to show the first person aka array[0] so we set useState(0)
  const [index, setIndex] = useState(0)
  const {name, job, image, text} = people[index];

  const checkNumber = (number) => {
    // if at [people.length -1] aka last in array, pressing 'next', return first item [0] 
    if(number > people.length-1) {
      return 0;
    }
    // if at [0] pressing 'prev', return last item
    if(number < 0) {
      return people.length-1;
    }
    // if somewhere in the middle, all good
    return number
  }
  const prevPerson = () => {
    setIndex((index) => {
      return checkNumber(index - 1);
    })
  }
  const nextPerson = () => {
    setIndex((index) => {
      return checkNumber(index + 1);
    });
  };

  const randomPerson = () => {
    let random = Math.floor(Math.random() * people.length);
    // to not allow repetitions...
    if (random == index) {
      random = index + 1;
    }
    setIndex(checkNumber(random));
    
  }

  return <article className='review'>
    <div className="img-container">
      <img src={image} alt={name} className='person-img'/>
      <span className="quote-icon">
        <FaQuoteRight/>
      </span>
    </div>
    <h4 className="author">{name}</h4>
    <p className="job">{job}</p>
    <p className="info">{text}</p>
    <div className="button-container">
      <button className='prev-btn' onClick={prevPerson}>
        <FaChevronLeft/>
      </button>
      <button className='next-btn' onClick={nextPerson}>
        <FaChevronRight/>
      </button>
    </div>
    <button className='random-btn' onClick={randomPerson}>surprise me</button>
  </article>;
};

export default Review;
