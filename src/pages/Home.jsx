import { Link } from 'react-router-dom'
import { featuredImages, galleryItems, reasons } from '../siteData'

function Home() {
    return (
        <>
            <section className="hero page-hero-home">
                <div className="hero-inner">
                    <div className="hero-content">
                        <div className="hero-badge">Serving the GTA for 30+ Years</div>
                        <h1>
                            Unforgettable <em>Entertainment</em> for Every Event
                        </h1>
                        <p className="hero-sub">
                            From stilt walkers to kids camps, Kim&apos;s Cast of Characters
                            brings the magic of live performance to parties, corporate events,
                            and festivals across the Greater Toronto Area.
                        </p>
                        <div className="hero-actions">
                            <Link to="/book" className="btn-primary">
                                Book Entertainment ↗
                            </Link>
                            <Link to="/performers" className="btn-secondary">
                                View Performers
                            </Link>
                        </div>
                        <div className="hero-stats">
                            <div className="stat-item">
                                <strong>30+</strong>
                                <span>Years Experience</span>
                            </div>
                            <div className="stat-item">
                                <strong>500+</strong>
                                <span>Events Performed</span>
                            </div>
                            <div className="stat-item">
                                <strong>GTA</strong>
                                <span>Wide Coverage</span>
                            </div>
                        </div>
                    </div>

                    <div className="hero-visual">
                        <div className="hero-img-main">
                            <img
                                className="hero-img"
                                src={featuredImages.hero.src}
                                alt={featuredImages.hero.alt}
                            />
                            <div className="hero-img-overlay">
                                <span className="img-label">Live entertainment across the GTA</span>
                            </div>
                        </div>
                        <div className="float-card float-top-right">
                            <span className="fc-icon">⭐</span>
                            <div>
                                <div className="fc-text">5-Star Rated</div>
                                <div className="fc-sub">Across the GTA</div>
                            </div>
                        </div>
                        <div className="float-card float-bottom-left">
                            <span className="fc-icon">🎭</span>
                            <div>
                                <div className="fc-text">Live Performers</div>
                                <div className="fc-sub">Ready to Entertain</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="feature-band">
                <div className="section-inner">
                    <div className="feature-band-grid">
                        <Link className="band-card reveal" to="/about">
                            <span className="section-label">About</span>
                            <h2 className="section-title compact-title">
                                A legacy of <em>showmanship</em>
                            </h2>
                            <p>
                                Learn how Kim built a performer roster trusted across private,
                                public, and corporate events.
                            </p>
                        </Link>
                        <Link className="band-card reveal reveal-delay-1" to="/performers">
                            <span className="section-label">Performers</span>
                            <h2 className="section-title compact-title">
                                Acts with real <em>range</em>
                            </h2>
                            <p>
                                Browse the cast and find the right balance of spectacle,
                                interaction, and atmosphere.
                            </p>
                        </Link>
                        <Link className="band-card reveal reveal-delay-2" to="/book">
                            <span className="section-label">Book</span>
                            <h2 className="section-title compact-title">
                                A booking process that feels <em>easy</em>
                            </h2>
                            <p>
                                See how to go from event brief to confirmed entertainment plan
                                without the usual friction.
                            </p>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="why">
                <div className="section-inner">
                    <div className="why-inner-wrap">
                        <div className="why-left">
                            <span className="section-label">Why Choose Us</span>
                            <h2 className="section-title">
                                The GTA&apos;s Most <em>Trusted</em> Entertainment
                            </h2>
                            <p className="section-lead">
                                We&apos;re not a directory. We&apos;re a curated team that knows how to
                                match live performance to the room, the audience, and the pace
                                of the event.
                            </p>

                            <ul className="why-list">
                                {reasons.map((reason, index) => (
                                    <li
                                        key={reason.title}
                                        className={[
                                            'why-item',
                                            'reveal',
                                            index > 0 ? `reveal-delay-${index}` : '',
                                        ]
                                            .filter(Boolean)
                                            .join(' ')}
                                    >
                                        <div className="why-icon">{reason.icon}</div>
                                        <div className="why-item-text">
                                            <strong>{reason.title}</strong>
                                            <p>{reason.description}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="why-visual reveal reveal-delay-2">
                            <div className="why-img-card why-img-card-landscape">
                                <img
                                    className="why-card-img"
                                    src={featuredImages.whyEvent.src}
                                    alt={featuredImages.whyEvent.alt}
                                />
                            </div>
                            <div className="why-img-card why-img-card-portrait">
                                <img
                                    className="why-card-img"
                                    src={featuredImages.whyCrowd.src}
                                    alt={featuredImages.whyCrowd.alt}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="gallery">
                <div className="section-inner">
                    <div className="gallery-header reveal">
                        <span className="section-label">Highlights</span>
                        <h2 className="section-title">
                            Events We&apos;ve <em>Brought to Life</em>
                        </h2>
                        <p className="section-lead">
                            A glimpse into the energy, creativity, and joy our performers
                            bring to every occasion.
                        </p>
                    </div>

                    <div className="gallery-grid">
                        {galleryItems.map((item, index) => (
                            <div
                                key={item.label}
                                className={[
                                    'gal-item',
                                    'reveal',
                                    index > 0 ? `reveal-delay-${Math.min(index, 2)}` : '',
                                ]
                                    .filter(Boolean)
                                    .join(' ')}
                            >
                                <img className="gal-item-img" src={item.src} alt={item.alt} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="cta-banner">
                <h2>Make Your Event Unforgettable</h2>
                <p>
                    Ready to add some magic? Get in touch with Kim&apos;s team and let&apos;s
                    build the right entertainment mix for your event.
                </p>
                <Link to="/book" className="btn-white">
                    Start Your Booking
                </Link>
            </div>
        </>
    )
}

export default Home
