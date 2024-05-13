import React from 'react';
import './Header.css';

const nav_link = [
    {
        path: '#home',
        display: 'Home'
    },
    {
        path: '#about',
        display: 'About'
    },
    {
        path: '#service',
        display: 'Service'
    },
    {
        path: '#project',
        display: 'Project'
    },
    {
        path: '#blog',
        display: 'Blog'
    }
];

const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <div className='nav_wrapper'>
                    <div className='logo'>
                        <h2>Brain Box</h2>
                    </div>
                    {/* navigation  */}
                    <div className='navigation'>
                        <ul className='menu'>
                            {
                                nav_link.map((item, index) => (
                                    <li key={index} className='menu_item'>
                                        <a href={item.path} className='menu_link'>{item.display}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    {/* light mode  */}
                    <div className='light_mode'>
                        <span><i className="ri-sun-line"></i>Light Mode </span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
