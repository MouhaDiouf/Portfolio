import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Header.css';
import profile from '../../pictures/profile.jpg';

export default function Header() {
  return (
    <>
      <header>
        <nav className="navigation" role="navigation">
          <div id="logo"></div>
          <ul>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#about-me">About</a>
            </li>
          </ul>
        </nav>
        <div className="hero">
          <div className="profile">
            <img src={profile} alt="" />
          </div>
          <h1>
            Hello, I am
            <span
              className="txt-type"
              data-wait="3000"
              data-words='[" Mouhamadou", " a Developer", " a Passionate Learner"]'
            ></span>
          </h1>
        </div>
      </header>
    </>
  );
}