import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // turn count to a number (prev is a string)
    let amount = parseInt(count)
    if(count <= 0) {
      amount = 1;
    }
    if(count > 8) {
      amount = 8;
    }
    // slice: select items from start to end (dnot include end value), returns new array
    setText(data.slice(0, amount));
  }
  
  return (
  <section className='section-center'>
    <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, harum?</h3>
    <form className='lorem-form' onSubmit={handleSubmit}>
      <label htmlFor="amount">
        paragraphs:
      </label>
      <input type="number" name='amount' id='amount' value={count}
      onChange={(e) => setCount(e.target.value)}/>
      <button type='submit' className='btn'>generate</button>
    </form>
    <article className='lorem-text'>
      {text.map((item, index) => {
        return <p key={index}>{item}</p>
      })}
    </article>
  </section>
    )
}

export default App;
