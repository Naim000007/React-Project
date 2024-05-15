import React, { useRef, useEffect } from 'react';
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
    const headerRef = useRef(null);
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav');
    }
    const headerFunc = () => {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            headerRef.current.classList.add('header_shrink')
        }
        else {
            headerRef.current.classList.remove('header_shrink');
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', headerFunc);
        return () => {
            window.removeEventListener('scroll', headerFunc);
        }
    }, []);

    return (
        <header ref={headerRef} className='header' >
            <div className='container'>
                <div className='nav_wrapper'>
                    <div className='logo'>
                        <h2>Brain Box</h2>
                    </div>
                    {/* navigation  */}
                    <div className='navigation' ref={navRef}>
                        <ul className='menu'>
                            {nav_link.map((item, index) => (
                                <li key={index} className='menu_item'>
                                    <a href={item.path} className='menu_link'>{item.display}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <span className='nav-btn nav-close-btn'><i onClick={showNavbar} class="ri-menu-line"></i></span>
                </div>
                <span className='nav-btn'><i onClick={showNavbar} class="ri-close-line"></i></span>
            </div>
        </header>
    );
};

export default Header;
