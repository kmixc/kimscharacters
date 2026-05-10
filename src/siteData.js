const imageModules = import.meta.glob('./assets/img/*.{jpg,jpeg,png,webp,avif}', {
    eager: true,
    import: 'default',
})

const imageByName = Object.fromEntries(
    Object.entries(imageModules).map(([path, source]) => {
        const fileName = path.split('/').pop() ?? ''
        const baseName = fileName.replace(/\.[^.]+$/, '')

        return [baseName, source]
    })
)

export const featuredImages = {
    hero: {
        src: imageByName.performer_hero_1,
        alt: 'A Kim\'s Cast performer entertaining guests at an event',
    },
    about: {
        src: imageByName.kim_1,
        alt: 'Kim Cayer with performers from Kim\'s Cast of Characters',
    },
    whyEvent: {
        src: imageByName.performer_at_event_1,
        alt: 'A performer engaging guests at a live event',
    },
    whyCrowd: {
        src: imageByName.crowd_engagement_1,
        alt: 'Guests reacting to live entertainment at an event',
    },
}

export const confettiColors = [
    '#FFD93D',
    '#FF6B6B',
    '#4ECDC4',
    '#A78BFA',
    '#F9A8D4',
]

export const confettiDots = Array.from({ length: 28 }, (_, index) => {
    const size = 30 + ((index * 17) % 81)

    return {
        id: index,
        size,
        left: (index * 37) % 100,
        duration: 15 + ((index * 7) % 21),
        delay: -((index * 11) % 31),
        color: confettiColors[index % confettiColors.length],
    }
})

export const performers = [
    {
        icon: '🎩',
        title: 'Magicians',
        description:
            'Interactive sleight-of-hand, visual illusions, and polished performance that keep guests engaged up close and on stage.',
        linkLabel: 'Book This Act',
        detail: 'Great for corporate events, private parties, receptions, and family-friendly entertainment.',
    },
    {
        icon: '🎈',
        title: 'Balloonists',
        description:
            'Fast, colorful balloon creations that double as entertainment and take-home fun for kids and families.',
        linkLabel: 'Book This Act',
        detail: 'Ideal for school events, family festivals, community days, and birthday parties.',
    },
    {
        icon: '🤡',
        title: 'Clowns',
        description:
            'Playful performers who mix comedy, crowd interaction, and classic family entertainment for all-ages events.',
        linkLabel: 'Book This Act',
        detail: 'Perfect for birthday parties, community events, fairs, and family celebration programming.',
    },
    {
        icon: '🎨',
        title: 'Face Painters',
        description:
            'Professional artists creating quick, vibrant designs that keep lines moving while adding a memorable guest experience.',
        linkLabel: 'Book This Act',
        detail: 'Strong fit for festivals, school fun fairs, grand openings, and family activations.',
    },
    {
        icon: '✨',
        title: 'Glitter Tattoos',
        description:
            'Sparkling, skin-safe designs that add instant glamour and a fun interactive station guests love to visit.',
        linkLabel: 'Book This Act',
        detail: 'Popular for parties, brand activations, school events, and all-ages celebrations.',
    },
    {
        icon: '🦵',
        title: 'Stilt Walkers',
        description:
            'Tower over the crowd and command attention from across the venue. Our stilt walkers are seasoned pros who create instant atmosphere.',
        linkLabel: 'Book This Act',
        detail: 'Best for festivals, parades, brand activations, and outdoor events.',
    },
    {
        icon: '🤹',
        title: 'Jugglers',
        description:
            'From elegant stage work to playful roaming performance, our jugglers blend skill, comedy, and audience interaction.',
        linkLabel: 'Book This Act',
        detail: 'Ideal for family events, corporate receptions, and public celebrations.',
    },
    {
        icon: '🏕️',
        title: 'Kids Camps',
        description:
            'Creative, hands-on camp-style workshops for kids with guided activities, games, and entertainment that keep groups engaged.',
        linkLabel: 'Book This Act',
        detail: 'Ideal for schools, community programs, seasonal camps, and kids event programming.',
    },
    {
        icon: '🎭',
        title: 'Character Actors',
        description:
            'Beloved characters brought to life by professional performers who know how to stay in role and energize a crowd.',
        linkLabel: 'Book This Act',
        detail: 'Strong fit for themed parties, community events, and photo moments.',
    },
    {
        icon: '✨',
        title: 'Custom Entertainment',
        description:
            "If your event needs something specific, we'll build a package around your theme, audience, and budget.",
        linkLabel: 'Plan a Custom Package',
        detail: 'Useful for branded campaigns, galas, launches, and mixed-format programs.',
    },
]

export const reasons = [
    {
        icon: '🏆',
        title: '30+ Years of Proven Experience',
        description:
            'Decades of events, satisfied clients, and a reputation built on consistency and quality.',
    },
    {
        icon: '📍',
        title: 'Trusted Across the GTA',
        description:
            "From Mississauga to Markham, we've performed at events of every scale across the Greater Toronto Area.",
    },
    {
        icon: '🎨',
        title: 'Wide Range of Performers',
        description:
            'One conversation gets you access to our full roster, with combinations tailored to your crowd and format.',
    },
    {
        icon: '📞',
        title: 'Easy, Stress-Free Booking',
        description:
            'Share the event details, and we will guide the performer mix, timing, and logistics from there.',
    },
]

export const whyProofPoints = [
    {
        title: 'Reliable performer coordination',
        description:
            'Timelines, arrival windows, and event flow are planned around the venue and the audience, not left to chance.',
    },
    {
        title: 'Entertainment with range',
        description:
            'The roster supports family-friendly events, public festivals, private parties, and polished corporate environments.',
    },
    {
        title: 'Straightforward communication',
        description:
            'Clients get practical recommendations, responsive follow-up, and a booking process that stays easy to manage.',
    },
]

export const servicePromises = [
    {
        title: 'Curated recommendations',
        description:
            'Acts are matched to your audience, layout, and event tone instead of being offered as a generic list.',
    },
    {
        title: 'Professional presentation',
        description:
            'Performers are selected for presence, reliability, and their ability to elevate the experience on site.',
    },
    {
        title: 'Budget-aware planning',
        description:
            'Packages can scale from one key feature act to a broader entertainment lineup without losing cohesion.',
    },
]

export const galleryItems = [
    {
        label: 'Feature Performance Shot',
        src: imageByName.performer_hero_1,
        alt: 'Feature entertainment performance at a live event',
    },
    {
        label: 'Juggler in Action',
        src: imageByName.img_8,
        alt: 'Live performer in action at an event',
    },
    {
        label: 'Fortune Teller Session',
        src: imageByName.img_14,
        alt: 'One-on-one performer interaction with an event guest',
    },
    {
        label: 'Stilt Walker Parade',
        src: imageByName.img_21,
        alt: 'Roaming entertainment moving through a crowd',
    },
    {
        label: 'Character Meet & Greet',
        src: imageByName.img_27,
        alt: 'Character performer greeting guests at an event',
    },
]

export const galleryMoments = [
    {
        category: 'Festival Entry',
        title: 'Big arrival energy',
        caption: 'Stilt walkers and roaming acts turning entrances into instant attention.',
        size: 'tall',
        tone: 'sun',
        src: imageByName.img_31,
        alt: 'Roaming entertainers creating a strong event entrance',
    },
    {
        category: 'Guest Interaction',
        title: 'Close-up crowd moments',
        caption: 'One-on-one entertainment that keeps guests engaged between headline beats.',
        size: 'wide',
        tone: 'teal',
        src: imageByName.performer_at_event_1,
        alt: 'Performer engaging closely with guests during an event',
    },
    {
        category: 'Theme Work',
        title: 'Characters with presence',
        caption: 'Photo-friendly appearances that give themed events a stronger identity.',
        size: 'square',
        tone: 'coral',
        src: imageByName.img_25,
        alt: 'Character entertainment at a themed event',
    },
    {
        category: 'Live Showcase',
        title: 'Feature-act moments',
        caption: 'Skill-driven performances that anchor the room and pull eyes forward.',
        size: 'square',
        tone: 'plum',
        src: imageByName.img_18,
        alt: 'Feature performer holding the room during a live event',
    },
    {
        category: 'Public Events',
        title: 'Family-friendly atmosphere',
        caption: 'Warm, playful scenes suited to community days, fairs, and seasonal programs.',
        size: 'wide',
        tone: 'cream',
        src: imageByName.crowd_engagement_1,
        alt: 'Family-friendly entertainment drawing in a public event crowd',
    },
    {
        category: 'Custom Bookings',
        title: 'Entertainment shaped to the brief',
        caption: 'Acts mixed around venue flow, audience age, and the kind of mood clients want.',
        size: 'square',
        tone: 'sun',
        src: imageByName.img_33,
        alt: 'Custom entertainment setup tailored to a client event brief',
    },
]

const galleryPhotoThemes = [
    {
        category: 'Festival crowd',
        title: 'Wide event shot',
        icon: '📷',
        tone: 'sun',
        ratio: 'landscape',
    },
    {
        category: 'Roaming act',
        title: 'Performer close-up',
        icon: '🎭',
        tone: 'coral',
        ratio: 'portrait',
    },
    {
        category: 'Guest interaction',
        title: 'Candid moment',
        icon: '✨',
        tone: 'teal',
        ratio: 'square',
    },
    {
        category: 'Feature performance',
        title: 'Action shot',
        icon: '🎪',
        tone: 'plum',
        ratio: 'landscape',
    },
    {
        category: 'Themed event',
        title: 'Styled scene',
        icon: '🎉',
        tone: 'cream',
        ratio: 'portrait',
    },
]

const numberedGalleryPhotos = Array.from({ length: 30 }, (_, index) => {
    const photoNumber = index + 1
    const photoKey = `img_${photoNumber}`
    const theme = galleryPhotoThemes[index % galleryPhotoThemes.length]

    return {
        id: `gallery-photo-${photoNumber}`,
        label: `Photo ${String(photoNumber).padStart(2, '0')}`,
        category: theme.category,
        title: theme.title,
        icon: theme.icon,
        tone: theme.tone,
        ratio: theme.ratio,
        src: imageByName[photoKey],
        alt: `Event entertainment photo ${photoNumber}`,
    }
})

export const galleryPhotoPlaceholders = numberedGalleryPhotos

export const galleryCollections = [
    {
        kicker: 'Seen here',
        title: 'Festival and fair coverage',
        description:
            'Roaming spectacle, crowd-building visuals, and moments designed to read well in open public spaces.',
    },
    {
        kicker: 'Also here',
        title: 'Interactive guest engagement',
        description:
            'Entertainment that works in motion, sparks conversation, and fills the gaps between formal program beats.',
    },
    {
        kicker: 'And here',
        title: 'Custom themed bookings',
        description:
            'Character work and curated act mixes built to match a brand, celebration, or seasonal concept.',
    },
]

export const galleryHighlights = [
    {
        value: '500+',
        label: 'events animated',
    },
    {
        value: '30+',
        label: 'years in live entertainment',
    },
    {
        value: 'GTA',
        label: 'regional event coverage',
    },
]

export const galleryBusinessNotes = [
    {
        value: 'Curated',
        title: 'Performer mixes, not random listings',
        description: 'Acts are chosen around event tone, flow, and guest profile.',
    },
    {
        value: 'Flexible',
        title: 'Works for private, public, and branded events',
        description: 'Bookings scale from one visual feature to a fuller cast lineup.',
    },
    {
        value: 'Trusted',
        title: 'A business built on repeat clients',
        description: 'The gallery reflects the kind of atmosphere people come back for.',
    },
]

export const aboutPillars = [
    {
        title: 'Built on relationships',
        description:
            'Clients come back because the process is direct, reliable, and easy to manage.',
    },
    {
        title: 'Performance-first casting',
        description:
            'Every act is selected for stage presence, professionalism, and crowd connection.',
    },
    {
        title: 'Flexible event planning',
        description:
            'From a single performer to a multi-act lineup, the booking scales to the event.',
    },
]

export const milestones = [
    {
        year: '1984',
        title: 'Kim launches the agency',
        description:
            'What started as a performance business grew into a trusted entertainment roster for the GTA.',
    },
    {
        year: '2000s',
        title: 'Expanded roster and event formats',
        description:
            'The cast grew to support community festivals, corporate events, private parties, and themed activations.',
    },
    {
        year: 'Today',
        title: 'A curated entertainment partner',
        description:
            'Kim\'s Cast continues to match professional performers to events that need memorable live energy.',
    },
]

export const performerCategories = [
    {
        title: 'Roaming acts',
        description:
            'Great for arrival moments, crowd building, and keeping large venues visually alive.',
        items: 'Stilt walkers, character actors, interactive hosts',
    },
    {
        title: 'Featured moments',
        description:
            'Best when you need a performer to anchor a scheduled showcase or focal point.',
        items: 'Jugglers, specialty acts, themed feature performances',
    },
    {
        title: 'Atmosphere builders',
        description:
            'Designed to create conversation, delight, and memorable one-on-one guest interactions.',
        items: 'Fortune tellers, themed characters, ambient entertainers',
    },
]

export const bookingSteps = [
    {
        step: '01',
        title: 'Tell us about the event',
        description:
            'Share the date, venue, guest count, and what kind of atmosphere you want to create.',
    },
    {
        step: '02',
        title: 'Get a tailored recommendation',
        description:
            'We will suggest performers, timing, and package options that fit the event and budget.',
    },
    {
        step: '03',
        title: 'Confirm the booking',
        description:
            'Once approved, we lock in the entertainment plan and handle the performer coordination.',
    },
]

export const bookingPackages = [
    {
        title: 'Signature pop-in',
        subtitle: 'One standout performer',
        description:
            'A focused booking for intimate gatherings, openings, and smaller branded moments.',
    },
    {
        title: 'Event atmosphere set',
        subtitle: 'Multiple performers, coordinated flow',
        description:
            'A balanced entertainment mix for receptions, community events, and family celebrations.',
    },
    {
        title: 'Custom headline package',
        subtitle: 'Built around your concept',
        description:
            'A tailored combination for galas, launches, activations, and larger public programs.',
    },
]