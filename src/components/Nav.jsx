import { Link, NavLink } from 'react-router-dom'

import brandLogo from '../assets/kimscharacters_svg.svg'

const navItems = [
    { key: 'home', label: 'Home', to: '/' },
    { key: 'about', label: 'About', to: '/about' },
    { key: 'performers', label: 'Performers', to: '/performers' },
    { key: 'why-us', label: 'Why Us', to: '/why-us' },
    { key: 'gallery', label: 'Gallery', to: '/gallery' },
    { key: 'book', label: 'Book', to: '/book', isCta: true },
]

function Nav({
    isScrolled,
    isMenuOpen,
    hamburgerRef,
    mobileMenuRef,
    onToggleMenu,
    onNavigate,
}) {
    return (
        <>
            <nav className={isScrolled ? 'scrolled' : ''}>
                <Link className="logo-wrap brand-link" to="/" onClick={onNavigate}>
                    <img className="brand-logo" src={brandLogo} alt="Kim's Cast of Characters logo" />
                    <div className="logo-text">
                        Kim&apos;s Characters
                        <br />
                        <span>Cast of Characters</span>
                    </div>
                </Link>

                <ul className="nav-links">
                    {navItems.map((item) => (
                        <li key={item.key}>
                            <NavLink
                                to={item.to}
                                className={({ isActive }) =>
                                    [
                                        isActive ? 'nav-link-active' : '',
                                        item.isCta ? 'nav-cta' : '',
                                    ]
                                        .filter(Boolean)
                                        .join(' ')
                                }
                                onClick={onNavigate}
                            >
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <button
                    ref={hamburgerRef}
                    type="button"
                    className="hamburger"
                    onClick={onToggleMenu}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMenuOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </nav>

            <div
                ref={mobileMenuRef}
                className={`mobile-menu${isMenuOpen ? ' open' : ''}`}
            >
                {navItems.map((item) => (
                    <NavLink
                        key={item.key}
                        to={item.to}
                        className={({ isActive }) =>
                            isActive ? 'nav-link-active' : ''
                        }
                        onClick={onNavigate}
                    >
                        {item.label}
                    </NavLink>
                ))}
            </div>
        </>
    )
}

export default Nav
