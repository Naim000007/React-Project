import React from 'react'
import "./Footer.css"
import youtube_icone from "../../assets/youtube_icon.png"
import twitter_icone from "../../assets/twitter_icon.png"
import instagram_icone from "../../assets/instagram_icon.png"
import facebook_icone from "../../assets/facebook_icon.png"

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-icons">
                <img src={facebook_icone} alt="" />
                <img src={instagram_icone} alt="" />
                <img src={twitter_icone} alt="" />
                <img src={youtube_icone} alt="" />
            </div>
            <ul>
                <li>Audio Description</li>
                <li>Help Center</li>
                <li>Gift Card</li>
                <li>Media Center</li>
                <li>Investor Relations</li>
                <li>jobs</li>
                <li>Terms Of Use</li>
                <li>Privacy</li>
                <li>Legal Notices</li>
                <li>Cookie Preferences</li>
                <li>Corporate Information</li>
                <li>Contact Us</li>
            </ul>
            <p className='copyright-text'> © 2000-2026 Nextwave, Inc.</p>
        </div>
    )
}

export default Footer