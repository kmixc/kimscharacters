import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
    galleryHighlights,
    galleryMoments,
    galleryPhotoPlaceholders,
} from '../siteData'

function Gallery() {
    const [activeItems, setActiveItems] = useState([])
    const [activePhotoIndex, setActivePhotoIndex] = useState(null)

    const activePhoto =
        activePhotoIndex === null ? null : activeItems[activePhotoIndex] ?? null

    useEffect(() => {
        if (activePhotoIndex !== null && !activePhoto) {
            setActivePhotoIndex(activeItems.length ? 0 : null)
        }
    }, [activeItems.length, activePhoto, activePhotoIndex])

    useEffect(() => {
        if (!activePhoto) {
            return undefined
        }

        const previousOverflow = document.body.style.overflow

        document.body.style.overflow = 'hidden'

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setActiveItems([])
                setActivePhotoIndex(null)
            }

            if (event.key === 'ArrowRight') {
                setActivePhotoIndex((currentIndex) => {
                    if (currentIndex === null || activeItems.length === 0) {
                        return currentIndex
                    }

                    return (currentIndex + 1) % activeItems.length
                })
            }

            if (event.key === 'ArrowLeft') {
                setActivePhotoIndex((currentIndex) => {
                    if (currentIndex === null || activeItems.length === 0) {
                        return currentIndex
                    }

                    return (currentIndex - 1 + activeItems.length) % activeItems.length
                })
            }
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => {
            document.body.style.overflow = previousOverflow
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [activeItems.length, activePhoto])

    const openPhotoShowcaseItem = (itemId) => {
        const photoIndex = galleryPhotoPlaceholders.findIndex((item) => item.id === itemId)

        if (photoIndex !== -1) {
            setActiveItems(galleryPhotoPlaceholders)
            setActivePhotoIndex(photoIndex)
        }
    }

    const openPhotoShowcaseFromMoment = (moment) => {
        const directMatchIndex = galleryPhotoPlaceholders.findIndex((item) => item.src === moment.src)

        if (directMatchIndex !== -1) {
            setActiveItems(galleryPhotoPlaceholders)
            setActivePhotoIndex(directMatchIndex)
            return
        }

        setActiveItems([
            moment,
            ...galleryPhotoPlaceholders.filter((item) => item.src !== moment.src),
        ])
        setActivePhotoIndex(0)
    }

    const showPreviousPhoto = () => {
        setActivePhotoIndex((currentIndex) => {
            if (currentIndex === null || activeItems.length === 0) {
                return currentIndex
            }

            return (currentIndex - 1 + activeItems.length) % activeItems.length
        })
    }

    const showNextPhoto = () => {
        setActivePhotoIndex((currentIndex) => {
            if (currentIndex === null || activeItems.length === 0) {
                return currentIndex
            }

            return (currentIndex + 1) % activeItems.length
        })
    }

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
                            <button
                                key={item.title}
                                type="button"
                                className={[
                                    'gallery-moment-card',
                                    `gallery-moment-${item.size}`,
                                    `gallery-moment-${item.tone}`,
                                    'reveal',
                                    index > 0 ? `reveal-delay-${Math.min(index, 2)}` : '',
                                ]
                                    .filter(Boolean)
                                    .join(' ')}
                                onClick={() => openPhotoShowcaseFromMoment(item)}
                                aria-label={`Open ${item.title} in gallery viewer`}
                            >
                                <div className="gallery-moment-frame">
                                    <img className="gallery-moment-img" src={item.src} alt={item.alt} />
                                </div>
                            </button>
                        ))}
                    </div>

                    <div className="gallery-photo-wall-header reveal">
                        <span className="section-label">Photo Showcase</span>
                    </div>

                    <div className="gallery-photo-wall">
                        {galleryPhotoPlaceholders.map((item, index) => (
                            <button
                                key={item.id}
                                type="button"
                                className={[
                                    'gallery-photo-tile',
                                    `gallery-photo-${item.tone}`,
                                    'reveal',
                                    index > 0 ? `reveal-delay-${Math.min(index % 3, 2)}` : '',
                                ]
                                    .filter(Boolean)
                                    .join(' ')}
                                onClick={() => openPhotoShowcaseItem(item.id)}
                                aria-label={`Open ${item.title} in gallery viewer`}
                            >
                                <div className="gallery-photo-frame">
                                    <img className="gallery-photo-img" src={item.src} alt={item.alt} />
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {activePhoto ? (
                <div
                    className="gallery-lightbox"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Expanded gallery photo"
                    onClick={() => {
                        setActiveItems([])
                        setActivePhotoIndex(null)
                    }}
                >
                    <div
                        className="gallery-lightbox-dialog"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            type="button"
                            className="gallery-lightbox-close"
                            onClick={() => {
                                setActiveItems([])
                                setActivePhotoIndex(null)
                            }}
                            aria-label="Close gallery viewer"
                        >
                            Close
                        </button>

                        <div className="gallery-lightbox-media-wrap">
                            <button
                                type="button"
                                className="gallery-lightbox-nav gallery-lightbox-nav-prev"
                                onClick={showPreviousPhoto}
                                aria-label="Show previous photo"
                            >
                                Prev
                            </button>

                            <div className="gallery-lightbox-media">
                                <img src={activePhoto.src} alt={activePhoto.alt} />
                            </div>

                            <button
                                type="button"
                                className="gallery-lightbox-nav gallery-lightbox-nav-next"
                                onClick={showNextPhoto}
                                aria-label="Show next photo"
                            >
                                Next
                            </button>
                        </div>

                    </div>
                </div>
            ) : null}

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
