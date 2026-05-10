import { useState } from 'react'
import { performers } from '../siteData'

function Book() {
    const [selectedBooking, setSelectedBooking] = useState('')
    const [selectedEventType, setSelectedEventType] = useState('')
    const showOtherBookingField = selectedBooking === 'Other'
    const showOtherEventTypeField = selectedEventType === 'Other'

    return (
        <>
            <section className="page-hero page-hero-book">
                <div className="section-inner page-hero-grid">
                    <div className="reveal">
                        <span className="section-label">Book Entertainment</span>
                        <h1 className="page-title">
                            Plan a booking that feels <em>clear</em> from the start
                        </h1>
                        <p className="section-lead page-lead">
                            Whether you need one standout act or a full entertainment mix,
                            the process starts with a simple event brief and a tailored
                            recommendation.
                        </p>
                        <div className="hero-actions">
                            <a href="mailto:kimscharacters@gmail.com" className="btn-primary">
                                Email the Team
                            </a>
                            <a href="tel:+14166182012" className="btn-secondary">
                                Call for Availability
                            </a>
                        </div>
                    </div>
                    <div className="booking-highlight reveal reveal-delay-2">
                        <strong>Before you submit</strong>
                        <ul>
                            <li>Event date or preferred booking window</li>
                            <li>What performer or act you want to book</li>
                            <li>Celebration type, venue, and guest details</li>
                            <li>Your contact information for follow-up</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="page-section">
                <div className="section-inner">
                    <div className="section-heading reveal">
                        <span className="section-label">Booking Form</span>
                        <h2 className="section-title">
                            Send the event details and we&apos;ll take it from <em>there</em>
                        </h2>
                    </div>

                    <div className="booking-form-layout">
                        <form
                            className="booking-form reveal"
                            action="https://formspree.io/f/xdabpvdg"
                            method="POST"
                        >
                            <input
                                type="hidden"
                                name="_subject"
                                value="New Kim's Cast booking request"
                            />

                            <div className="form-field full-width">
                                <label htmlFor="event-date">Event Date</label>
                                <input id="event-date" name="eventDate" type="date" required />
                                <p className="field-note">
                                    If you are booking multiple events, please email us or
                                    call us.
                                </p>
                            </div>

                            <div className="form-field full-width">
                                <label htmlFor="booking-request">What would you like to book?</label>
                                <select
                                    id="booking-request"
                                    name="whatTheyWantToBook"
                                    value={selectedBooking}
                                    onChange={(event) => setSelectedBooking(event.target.value)}
                                    required
                                >
                                    <option value="" disabled>
                                        Select a service
                                    </option>
                                    {performers.map((performer) => (
                                        <option key={performer.title} value={performer.title}>
                                            {performer.title}
                                        </option>
                                    ))}
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            {showOtherBookingField && (
                                <div className="form-field full-width booking-other-field">
                                    <label htmlFor="booking-request-other">
                                        Describe what you need
                                    </label>
                                    <textarea
                                        id="booking-request-other"
                                        name="otherBookingRequest"
                                        rows="4"
                                        placeholder="Tell us what kind of performer, act, or entertainment mix you need."
                                        required={showOtherBookingField}
                                    />
                                </div>
                            )}

                            <div className="form-field full-width">
                                <label htmlFor="event-type">Celebration or Event Type</label>
                                <select
                                    id="event-type"
                                    name="eventType"
                                    value={selectedEventType}
                                    onChange={(event) => setSelectedEventType(event.target.value)}
                                    required
                                >
                                    <option value="" disabled>
                                        Select an event type
                                    </option>
                                    <option value="Birthday party">Birthday party</option>
                                    <option value="Festival">Festival</option>
                                    <option value="Corporate event">Corporate event</option>
                                    <option value="School celebration">School celebration</option>
                                    <option value="Community event">Community event</option>
                                    <option value="Private party">Private party</option>
                                    <option value="Wedding">Wedding</option>
                                    <option value="Holiday event">Holiday event</option>
                                    <option value="Halloween">Halloween</option>
                                    <option value="Christmas">Christmas</option>
                                    <option value="Easter">Easter</option>
                                    <option value="Fundraiser">Fundraiser</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            {showOtherEventTypeField && (
                                <div className="form-field full-width booking-other-field">
                                    <label htmlFor="event-type-other">
                                        Describe the event type
                                    </label>
                                    <textarea
                                        id="event-type-other"
                                        name="otherEventType"
                                        rows="4"
                                        placeholder="Tell us what kind of celebration or event you are planning."
                                        required={showOtherEventTypeField}
                                    />
                                </div>
                            )}

                            <div className="form-field full-width">
                                <label htmlFor="event-location">Event Location</label>
                                <input
                                    id="event-location"
                                    name="eventLocation"
                                    type="text"
                                    placeholder="Mississauga, Toronto, private venue, school gym, community centre, etc."
                                />
                            </div>

                            <div className="form-field full-width">
                                <label htmlFor="more-information">More Information</label>
                                <textarea
                                    id="more-information"
                                    name="moreInformation"
                                    rows="5"
                                    placeholder="Share any extra specifics that would help, like guest count, indoor or outdoor setup, timing, theme, age range, accessibility needs, or anything else we should know."
                                />
                            </div>

                            <div className="form-section-title full-width">Personal Info</div>

                            <div className="form-field">
                                <label htmlFor="full-name">Full Name</label>
                                <input id="full-name" name="fullName" type="text" required />
                            </div>

                            <div className="form-field">
                                <label htmlFor="email">Email</label>
                                <input id="email" name="email" type="email" required />
                            </div>

                            <div className="form-field">
                                <label htmlFor="phone">Phone Number</label>
                                <input id="phone" name="phone" type="tel" required />
                            </div>

                            <div className="full-width form-submit-row">
                                <button type="submit" className="btn-primary booking-submit">
                                    Send Booking Request
                                </button>
                            </div>
                        </form>

                        <aside className="booking-side-panel reveal reveal-delay-2">
                            <span className="section-label">What Helps Most</span>
                            <h3>Give us enough context to recommend the right act.</h3>
                            <ul>
                                <li>Which performer or style of entertainment you have in mind</li>
                                <li>Whether the event is indoors, outdoors, public, or private</li>
                                <li>Approximate guest count, audience age range, and venue type</li>
                                <li>Any brand, theme, or celebration details we should match</li>
                            </ul>
                            <div className="booking-policy">
                                <span className="booking-policy-label">Cancellation Policy</span>
                                <ul>
                                    <li>48 hours or more before the event: full refund</li>
                                    <li>48 to 24 hours before the event: 50% payment applies</li>
                                    <li>Less than 24 hours before the event: full payment applies</li>
                                </ul>
                            </div>
                            <div className="booking-direct-contact">
                                <a href="mailto:kimscharacters@gmail.com">kimscharacters@gmail.com</a>
                                <a href="tel:+14166182012">+1 (416) 618-2012</a>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <section className="contact-banner page-section">
                <div className="section-inner contact-banner-inner reveal">
                    <div>
                        <span className="section-label">Ready When You Are</span>
                        <h2 className="section-title">
                            Let&apos;s build the right <em>entertainment mix</em>
                        </h2>
                        <p className="section-lead">
                            Reach out with your event details and we will recommend the best
                            performer options for the audience, space, and budget.
                        </p>
                    </div>
                    <div className="contact-actions">
                        <a href="mailto:kimscharacters@gmail.com" className="btn-primary">
                            kimscharacters@gmail.com
                        </a>
                        <a href="tel:+14166182012" className="btn-secondary">
                            +1 (416) 618-2012
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Book
