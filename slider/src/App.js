import React, { useState, useEffect } from 'react';
import data from './data';

/////
import Title from './Title';
import Center from './Center';
import Buttons from './Buttons';

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length -1;
    if(index < 0) {
      setIndex(lastIndex);
    }
    // if we run out of items
    if(index > lastIndex) {
      setIndex(0)
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => clearInterval(slider);
  }, [index]);

  return <section className='section'>
      <Title />
      <div className="section-center">
        <Center people={people} index={index}/>
        <Buttons index={index} setIndex={setIndex}/>
      </div>
    </section>;
}

export default App;
