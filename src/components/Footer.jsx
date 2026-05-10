import { Link } from 'react-router-dom'

import brandLogo from '../assets/kimscharacters_svg.svg'

function InstagramIcon() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path
                fill="currentColor"
                d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.75a4 4 0 0 0-4 4v8.5a4 4 0 0 0 4 4h8.5a4 4 0 0 0 4-4v-8.5a4 4 0 0 0-4-4h-8.5Zm8.88 1.5a1.12 1.12 0 1 1 0 2.25 1.12 1.12 0 0 1 0-2.25ZM12 6.5A5.5 5.5 0 1 1 6.5 12 5.5 5.5 0 0 1 12 6.5Zm0 1.75A3.75 3.75 0 1 0 15.75 12 3.75 3.75 0 0 0 12 8.25Z"
            />
        </svg>
    )
}

function FacebookIcon() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path
                fill="currentColor"
                d="M13.27 22v-8.2h2.76l.41-3.2h-3.17V8.56c0-.93.26-1.56 1.59-1.56H16.6V4.14c-.3-.04-1.32-.14-2.51-.14-2.49 0-4.19 1.52-4.19 4.32v2.28H7.1v3.2h2.8V22h3.37Z"
            />
        </svg>
    )
}

function Footer() {
    return (
        <footer>
            <div className="footer-inner">
                <div className="footer-top">
                    <div className="footer-brand">
                        <Link className="logo-wrap brand-link" to="/">
                            <img
                                className="brand-logo footer-brand-logo"
                                src={brandLogo}
                                alt="Kim's Cast of Characters logo"
                            />
                            <div className="logo-text">
                                Kim&apos;s Cast
                                <br />
                                <span>of Characters</span>
                            </div>
                        </Link>
                        <p>
                            Bringing unforgettable live entertainment to the Greater Toronto
                            Area for over 40 years. Founded by Kim Cayer in Mississauga,
                            Ontario.
                        </p>
                        <div className="social-row">
                            <a
                                href="https://www.instagram.com/kimscharacters/"
                                className="social-btn"
                                title="Instagram"
                                aria-label="Visit Kim's Cast of Characters on Instagram"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <InstagramIcon />
                            </a>
                            <span
                                className="social-btn social-btn-disabled"
                                title="Facebook coming soon"
                                aria-label="Facebook coming soon"
                            >
                                <FacebookIcon />
                            </span>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4>Explore</h4>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/performers">Performers</Link>
                            </li>
                            <li>
                                <Link to="/why-us">Why Us</Link>
                            </li>
                            <li>
                                <Link to="/gallery">Gallery</Link>
                            </li>
                            <li>
                                <Link to="/book">Book</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Contact</h4>
                        <ul>
                            <li>
                                <Link to="/book">📍 Mississauga, Ontario</Link>
                            </li>
                            <li>
                                <a href="tel:+14166182012">📞 +1 (416) 618-2012</a>
                            </li>
                            <li>
                                <a href="mailto:kimscharacters@gmail.com">✉ kimscharacters@gmail.com</a>
                            </li>
                            <li>
                                <Link to="/book">📩 Request a Quote</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <span>© 2026 Kim&apos;s Cast of Characters. All rights reserved.</span>
                    <span>Mississauga, Ontario · Serving the GTA</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
