import { Link } from 'react-router-dom'
import { performerCategories, performers } from '../siteData'

function Performers() {
    return (
        <>
            <section className="page-hero page-hero-contrast">
                <div className="section-inner page-hero-grid">
                    <div className="reveal">
                        <span className="section-label">Performers</span>
                        <h1 className="page-title light-title">
                            A cast designed to <em>turn heads</em> and hold attention
                        </h1>
                        <p className="section-lead page-lead light-lead">
                            From visual spectacle to intimate guest interaction, these acts
                            are selected for professionalism, adaptability, and presence.
                        </p>
                    </div>
                    <div className="showcase-grid reveal reveal-delay-2">
                        {performerCategories.map((category) => (
                            <div key={category.title} className="showcase-card">
                                <strong>{category.title}</strong>
                                <p>{category.description}</p>
                                <span>{category.items}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="services page-section">
                <div className="section-inner">
                    <div className="services-header reveal">
                        <span className="section-label">Featured Acts</span>
                        <h2 className="section-title">
                            The <em>Cast</em> You&apos;ve Been Looking For
                        </h2>
                        <p className="section-lead">
                            Hand-picked professionals ready to dazzle your audience. Every
                            act can be matched to venue size, audience type, and event pace.
                        </p>
                    </div>

                    <div className="services-grid performer-page-grid">
                        {performers.map((performer, index) => (
                            <article
                                key={performer.title}
                                className={[
                                    'service-card',
                                    'reveal',
                                    index > 0 ? `reveal-delay-${Math.min(index, 3)}` : '',
                                ]
                                    .filter(Boolean)
                                    .join(' ')}
                            >
                                <div className="sc-icon">{performer.icon}</div>
                                <div className="sc-title">{performer.title}</div>
                                <p className="sc-desc">{performer.description}</p>
                                <p className="service-detail">{performer.detail}</p>
                                <Link to="/book" className="sc-link">
                                    {performer.linkLabel} →
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="page-section-soft">
                <div className="section-inner">
                    <div className="section-heading reveal">
                        <span className="section-label">How to Choose</span>
                        <h2 className="section-title">
                            Match the act to the <em>moment</em>
                        </h2>
                    </div>
                    <div className="metric-grid">
                        <article className="metric-card reveal">
                            <strong>Arrival energy</strong>
                            <p>Use tall, visual, or interactive acts to establish mood quickly.</p>
                        </article>
                        <article className="metric-card reveal reveal-delay-1">
                            <strong>Guest interaction</strong>
                            <p>Choose performers who can create one-on-one engagement without slowing flow.</p>
                        </article>
                        <article className="metric-card reveal reveal-delay-2">
                            <strong>Program balance</strong>
                            <p>Blend roaming and featured acts when an event needs both spectacle and structure.</p>
                        </article>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Performers
