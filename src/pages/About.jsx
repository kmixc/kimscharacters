import { aboutPillars, featuredImages, milestones } from '../siteData'

function About() {
    return (
        <>
            <section className="page-hero page-hero-split">
                <div className="section-inner page-hero-grid">
                    <div className="reveal">
                        <span className="section-label">About Kim&apos;s Cast</span>
                        <h1 className="page-title">
                            Built on <em>trust</em>, taste, and decades of live performance
                        </h1>
                        <p className="section-lead page-lead">
                            Kim&apos;s Cast of Characters started with one performer and grew into
                            a trusted entertainment partner for events that need more than a
                            generic booking list.
                        </p>
                    </div>
                    <div className="story-panel reveal reveal-delay-2">
                        <span className="story-panel-label">Quick Snapshot</span>
                        <h2 className="story-panel-title">Local roots. Long-running trust.</h2>
                        <p className="story-panel-copy">
                            A performer-led agency built in Mississauga and shaped by
                            decades of repeat clients, practical planning, and strong live
                            entertainment.
                        </p>
                        <div className="story-chip-group">
                            <div className="story-chip">Mississauga based</div>
                            <div className="story-chip">Serving the GTA</div>
                            <div className="story-chip">30+ years</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about page-section-soft">
                <div className="section-inner">
                    <div className="about-grid">
                        <div className="about-text reveal">
                            <span className="section-label">Our Story</span>
                            <h2 className="section-title">
                                Creating <em>Memories</em> Since 1984
                            </h2>
                            <p>
                                <strong>Kim Cayer</strong> founded Kim&apos;s Cast of Characters
                                with a simple belief: every event deserves a touch of magic and
                                a team that follows through.
                            </p>
                            <p>
                                What began as a performance business evolved into a curated
                                roster of professional entertainers who understand pacing,
                                presentation, and guest experience.
                            </p>
                            <p>
                                Today, the agency continues to focus on reliability,
                                affordability, and strong performer-client matches rather than
                                overpromising or overcomplicating the booking.
                            </p>
                        </div>
                        <div className="about-img reveal reveal-delay-2">
                            <div className="about-photo">
                                <img
                                    className="about-photo-img"
                                    src={featuredImages.about.src}
                                    alt={featuredImages.about.alt}
                                />
                                <span className="about-photo-label">Kim Cayer and company story</span>
                            </div>
                            <div className="about-tag">
                                30+
                                <span>Years of Magic</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-section">
                <div className="section-inner">
                    <div className="section-heading reveal">
                        <span className="section-label">What Matters</span>
                        <h2 className="section-title">
                            A company shaped by <em>standards</em>
                        </h2>
                    </div>
                    <div className="pill-grid">
                        {aboutPillars.map((pillar, index) => (
                            <article
                                key={pillar.title}
                                className={[
                                    'story-card',
                                    'reveal',
                                    index > 0 ? `reveal-delay-${index}` : '',
                                ]
                                    .filter(Boolean)
                                    .join(' ')}
                            >
                                <h3>{pillar.title}</h3>
                                <p>{pillar.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="page-section timeline-section">
                <div className="section-inner">
                    <div className="section-heading reveal">
                        <span className="section-label">Milestones</span>
                        <h2 className="section-title">
                            A steady <em>evolution</em>
                        </h2>
                    </div>
                    <div className="timeline">
                        {milestones.map((milestone, index) => (
                            <article
                                key={milestone.title}
                                className={[
                                    'timeline-item',
                                    'reveal',
                                    index > 0 ? `reveal-delay-${index}` : '',
                                ]
                                    .filter(Boolean)
                                    .join(' ')}
                            >
                                <span className="timeline-year">{milestone.year}</span>
                                <h3>{milestone.title}</h3>
                                <p>{milestone.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
