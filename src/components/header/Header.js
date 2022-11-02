import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <div className='header'>
            <img src="./assets/ease.svg" alt="logo ease" />
            <ul>
                <li><a href="#">Collesctions</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contacts</a></li>
            </ul>
        </div>
    );
};

export default Header;