import { Link } from 'react-router-dom'

import brandLogo from '../assets/kimscharacters_svg.svg'

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
                            <Link to="/performers" className="social-btn" title="Performers">
                                🎭
                            </Link>
                            <Link to="/about" className="social-btn" title="About">
                                ✨
                            </Link>
                            <Link to="/book" className="social-btn" title="Book">
                                📅
                            </Link>
                            <a href="mailto:kimscharacters@gmail.com" className="social-btn" title="Email">
                                ✉
                            </a>
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
