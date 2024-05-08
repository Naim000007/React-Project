import React from 'react'

const Footer = () => {
    return (
        <footer>
            <footer className="footer p-10 bg-neutral text-neutral-content">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <div className="footer-center gap-4 bg-neutral text-neutral-content p-4">
                <aside className="items-center grid-flow-col">
                    <p>Copyright © 2024 - All right reserved</p>
                </aside>

            </div>
        </footer>
    )
}

export default Footer