import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

// new Set gives us only unique values
const allCategories = ['all', ...new Set(items.map((item) => item.category))];
console.log(allCategories)

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if(category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }
  return <main>
    <section className="section menu">
      <div className="title">
        <h2>Our menu</h2>
        <div className="underline"></div>
      </div>
      <Categories filterItems={filterItems} categories={categories}/>
      <Menu items={menuItems}/>
    </section>
  </main>;
}

export default App;
