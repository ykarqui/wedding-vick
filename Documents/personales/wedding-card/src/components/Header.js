import React from 'react';
import logoicon from '../images/logo.png';

const Header = () => {
		return (
			<header>

				<div className="container">

					<a className="logo" href=""><img src={ logoicon } alt="Logo" /></a>

				</div>
			</header>
		);
}

export default Header;