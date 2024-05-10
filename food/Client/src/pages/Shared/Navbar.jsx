import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
// import { assets } from '../../assets/assets'
import logo from '../../assets/logo.png'
import basket_icon from '../../assets/basket_icon.png'
import search_icon from '../../assets/search_icon.png'

const Navbar = () => {
    const [active, setActive] = useState(false)
    window.addEventListener("scroll", () => {
        if (window.scrollY > -1) {
            setActive(true)
            console.log("active");
        }
        else {
            setActive(false)
        }
    })
    const [menu, setMenu] = useState("home")


    return (
        <div className={`navbar ${active ? "activenav" : ""} max-w-screen-xl`}>
            <Link to="/"><img src={logo} alt="" className='logo' srcset="" /></Link>
            <ul className="navbar-menu">

                <li onClick={() => { setMenu("home") }} className={menu === "home" ? "active" : ""}><Link to='/'>Home</Link></li>
                <li onClick={() => { setMenu("menu") }} className={menu === "menu" ? "active" : ""}><Link to='/menu'>Our Menu</Link></li>
                <li onClick={() => { setMenu("order") }} className={menu === "order" ? "active" : ""}><Link to={'/order'}>Order</Link></li>
                <li onClick={() => { setMenu("contact-us") }} className={menu === "contact-us" ? "active" : ""}>contact us</li>
            </ul>
            <div className="navbar-right">
                <Link><img src={search_icon}></img></Link>
                <div className="navbar-search-icon">
                    <img src={basket_icon} alt="" srcset="" />
                    <div className="dot"></div>
                </div>
                <button>Sing in</button>
            </div>

        </div>
    )
}

export default Navbar



// const NavBar = () => {

//     const navOptions = <>
//         <li><a>Item 555</a></li>
//         <li tabIndex={0}>
//             <a className="justify-between">
//                 Parent
//                 <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
//             </a>
//             <ul className="p-2">
//                 <li><a>Submenu 1</a></li>
//                 <li><a>Submenu 2</a></li>
//             </ul>
//         </li>
//         <li><a>Item 3</a></li>
//     </>

//     return (
//         <>
//             <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
//                 <div className="navbar-start">
//                     <div className="dropdown">
//                         <label tabIndex={0} className="btn btn-ghost lg:hidden">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//                         </label>
//                         <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
//                             {navOptions}
//                         </ul>
//                     </div>
//                     <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
//                 </div>
//                 <div className="navbar-center hidden lg:flex">
//                     <ul className="menu menu-horizontal px-1">
//                         {navOptions}
//                     </ul>
//                 </div>
//                 <div className="navbar-end">
//                     <a className="btn">Get started</a>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default NavBar;