import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <div>
            <div className='naim'></div>
            <footer className="footer">
                <div className="container2">
                    <div className="row">
                        <div className="footer-col">
                            <h4>company</h4>
                            <ul>
                                <li><a href="#">about us</a></li>
                                <li><a href="#">our services</a></li>
                                <li><a href="#">privacy policy</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>get help</h4>
                            <ul>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">returns</a></li>
                                <li><a href="#">payment options</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Services</h4>
                            <ul>
                                <li><a href="#">WEB DESIGN</a></li>
                                <li><a href="#">WEB DEVELOPMENT</a></li>
                                <li><a href="#">REPUTATION MANAGEMENT</a></li>
                                <li><a href="#">SOCIAL MEDIA MANAGEMENT</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>follow us</h4>
                            <div className="social-links">
                                <a href="#"><i class="ri-facebook-fill"></i></a>
                                <a href="#"><i className="ri-twitter-x-fill"></i></a>
                                <a href="#"><i class="ri-instagram-line"></i></a>
                                <a href="#"><i className="ri-linkedin-line"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer