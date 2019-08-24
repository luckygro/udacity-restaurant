import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="">

    <h1 className="container">
    	<Link alt="link to starting page" to="/">Restaurant Review App</Link>
	</h1>
  </header>
);

export default Header;
