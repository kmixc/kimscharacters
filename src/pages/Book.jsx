function Book() {
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
                                <textarea
                                    id="booking-request"
                                    name="whatTheyWantToBook"
                                    rows="4"
                                    placeholder="Tell us which act, performer, or entertainment mix you are interested in."
                                    required
                                />
                            </div>

                            <div className="form-field full-width">
                                <label htmlFor="event-type">Celebration or Event Type</label>
                                <textarea
                                    id="event-type"
                                    name="eventType"
                                    rows="4"
                                    placeholder="Birthday party, festival, corporate event, school celebration, brand activation, or anything else we should know."
                                    required
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

                            <div className="form-field">
                                <label htmlFor="location">City or Venue</label>
                                <input
                                    id="location"
                                    name="location"
                                    type="text"
                                    placeholder="Mississauga, Toronto, private venue, school gym, etc."
                                />
                            </div>

                            <div className="form-field full-width">
                                <label htmlFor="additional-details">Additional Details</label>
                                <textarea
                                    id="additional-details"
                                    name="additionalDetails"
                                    rows="5"
                                    placeholder="Guest count, indoor or outdoor setup, timing, theme, age range, accessibility needs, or anything else that helps us recommend the right fit."
                                />
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
