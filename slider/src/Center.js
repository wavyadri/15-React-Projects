import React from 'react'
import { FaQuoteRight } from 'react-icons/fa';


const Center = ({people, index}) => {
    return (
        <div>
            {people.map((person, personIndex) => {
                const {id, image, name, title, quote} = person;
                // positioning for each slide
                let position = 'nextSlide';
                if(personIndex === index) {
                    position = 'activeSlide';
                }
                if(personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
                    position = 'lastSlide';
                }

                return <article key={id} className={position}>
                    <img src={image} alt={name} className='person-img' />
                    <h4>{name}</h4>
                    <p className='title'>{title}</p>
                    <p className="text">{quote}</p>
                    <FaQuoteRight className='icon'/>
                </article>
            })}
        </div>
    )
}

export default Center
