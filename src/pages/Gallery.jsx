import { Link } from 'react-router-dom'
import {
    galleryHighlights,
    galleryMoments,
    galleryPhotoPlaceholders,
} from '../siteData'

function Gallery() {
    return (
        <>
            <section className="page-hero page-hero-split gallery-page-hero">
                <div className="section-inner page-hero-grid">
                    <div className="reveal">
                        <span className="section-label">Gallery</span>
                        <h1 className="page-title">
                            A visual look at the <em>moments</em> Kim&apos;s Cast creates
                        </h1>
                        <p className="section-lead page-lead">
                            Less brochure, more atmosphere: crowd reactions, character moments,
                            roaming energy, and event scenes that help clients picture the fit.
                        </p>
                    </div>

                    <div className="gallery-stat-panel reveal reveal-delay-2">
                        {galleryHighlights.map((item) => (
                            <div key={item.label} className="gallery-highlight-item gallery-stat-card">
                                <strong>{item.value}</strong>
                                <span>{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="gallery page-section">
                <div className="section-inner">
                    <div className="gallery-header reveal">
                        <span className="section-label">Featured Moments</span>
                        <h2 className="section-title">
                            A gallery built around <em>real event energy</em>
                        </h2>
                    </div>

                    <div className="gallery-mosaic">
                        {galleryMoments.map((item, index) => (
                            <article
                                key={item.title}
                                className={[
                                    'gallery-moment-card',
                                    `gallery-moment-${item.size}`,
                                    `gallery-moment-${item.tone}`,
                                    'reveal',
                                    index > 0 ? `reveal-delay-${Math.min(index, 2)}` : '',
                                ]
                                    .filter(Boolean)
                                    .join(' ')}
                            >
                                <div className="gallery-moment-frame" aria-hidden="true">
                                    <span className="gallery-moment-icon">{item.icon}</span>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="gallery-photo-wall-header reveal">
                        <span className="section-label">Photo Showcase</span>
                    </div>

                    <div className="gallery-photo-wall">
                        {galleryPhotoPlaceholders.map((item, index) => (
                            <article
                                key={item.id}
                                className={[
                                    'gallery-photo-tile',
                                    `gallery-photo-${item.tone}`,
                                    `gallery-photo-${item.ratio}`,
                                    'reveal',
                                    index > 0 ? `reveal-delay-${Math.min(index % 3, 2)}` : '',
                                ]
                                    .filter(Boolean)
                                    .join(' ')}
                            >
                                <div className="gallery-photo-frame" aria-hidden="true">
                                    <span className="gallery-photo-icon">{item.icon}</span>
                                    <span className="gallery-photo-number">{item.label}</span>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <div className="cta-banner gallery-cta">
                <h2>See the look, then book the energy</h2>
                <p>
                    If this is the kind of atmosphere you want for your event, we can help
                    build the right performer mix around it.
                </p>
                <Link to="/book" className="btn-white">
                    Plan Your Event
                </Link>
            </div>
        </>
    )
}

export default Gallery
