import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null); // for ul
  const linksRef = useRef(null); // for links

  useEffect(() => {
    // check the height for the links
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    // if links are showing aka showLinks true
    if(showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`
    } else {
      linksContainerRef.current.style.height = '0px'
    }
  }, [showLinks]);

  return <nav>
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="logo" />
        <button className='nav-toggle'
        onClick={() => setShowLinks(!showLinks)}>
          <FaBars/>
        </button>
      </div>
      <div className='links-container' ref={linksContainerRef}>
        <ul className='links' ref={linksRef}>
          {links.map((link) => {
            const {id, url, text} = link;
            // for every link, we want to return a list item
            return <li key={id}>
              <a href={url}>{text}</a>
            </li>
          })}
        </ul>
      </div>
      <ul className='social-icons'>
        {social.map((socials) => {
          const {id, url, icon} = socials;
          return <li key={id}>
            <a href={url}>{icon}</a>
          </li>
        })}
      </ul>
    </div>
  </nav>
}

export default Navbar
