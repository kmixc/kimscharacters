import { Link } from 'react-router-dom'
import { featuredImages, reasons, servicePromises, whyProofPoints } from '../siteData'

function WhyUs() {
    return (
        <>
            <section className="page-hero page-hero-contrast">
                <div className="section-inner page-hero-grid">
                    <div className="reveal">
                        <span className="section-label">Why Choose Us</span>
                        <h1 className="page-title light-title">
                            Entertainment that feels <em>considered</em>, not off-the-shelf
                        </h1>
                        <p className="section-lead page-lead light-lead">
                            Kim&apos;s Cast of Characters is built around fit: the right act,
                            the right tone, and the kind of event support that makes the day
                            easier instead of more complicated.
                        </p>
                    </div>

                    <div className="showcase-grid reveal reveal-delay-2">
                        {servicePromises.map((promise) => (
                            <div key={promise.title} className="showcase-card">
                                <strong>{promise.title}</strong>
                                <p>{promise.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="why why-page">
                <div className="section-inner">
                    <div className="why-inner-wrap">
                        <div className="why-left">
                            <span className="section-label">Trusted Across the GTA</span>
                            <h2 className="section-title">
                                The difference is in the <em>follow-through</em>
                            </h2>
                            <p className="section-lead">
                                The roster matters, but so do the details behind it: clear
                                planning, dependable performers, and entertainment choices that
                                feel appropriate for the audience and venue.
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
                            <div className="why-img-card">
                                <img
                                    className="why-card-img"
                                    src={featuredImages.whyCrowd.src}
                                    alt={featuredImages.whyCrowd.alt}
                                />
                            </div>
                            <div className="why-img-card">
                                <img
                                    className="why-card-img"
                                    src={featuredImages.whyEvent.src}
                                    alt={featuredImages.whyEvent.alt}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-section-soft">
                <div className="section-inner">
                    <div className="section-heading reveal">
                        <span className="section-label">What You Can Expect</span>
                        <h2 className="section-title">
                            A booking partner with real <em>standards</em>
                        </h2>
                    </div>

                    <div className="metric-grid">
                        {whyProofPoints.map((item, index) => (
                            <article
                                key={item.title}
                                className={[
                                    'metric-card',
                                    'reveal',
                                    index > 0 ? `reveal-delay-${index}` : '',
                                ]
                                    .filter(Boolean)
                                    .join(' ')}
                            >
                                <strong>{item.title}</strong>
                                <p>{item.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="contact-banner page-section">
                <div className="section-inner contact-banner-inner reveal">
                    <div>
                        <span className="section-label">Next Step</span>
                        <h2 className="section-title">
                            If the event matters, the <em>match</em> matters too
                        </h2>
                        <p className="section-lead">
                            Tell us what kind of experience you want guests to remember, and
                            we&apos;ll recommend performers that actually fit the brief.
                        </p>
                    </div>
                    <div className="contact-actions">
                        <Link to="/performers" className="btn-secondary">
                            View Performers
                        </Link>
                        <Link to="/book" className="btn-primary">
                            Start a Booking
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhyUs
