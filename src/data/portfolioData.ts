import { Project, Experience, SkillCategory, Achievement } from '../types';

export const PERSONAL_INFO = {
  name: 'Jeetandar N Silwani',
  role: 'Software Developer · Full Stack Engineer',
  positioning: 'Software Developer · Full Stack Engineer · Data Analytics · Creative · Social Media & Digital Executive',
  tagline: 'Building scalable full-stack applications, data-driven systems, and high-impact digital experiences at the intersection of technology and creativity.',
  extendedBio: `I’m Jeetandar N Silwani, a Full Stack Developer, Software Developer, App Developer, and Digital Creative passionate about building modern, scalable, and user-focused digital experiences. I enjoy working across the entire development process — from transforming an idea into a concept and designing the interface to developing the frontend, backend, APIs, databases, and deploying the final product.
My experience spans web development, mobile application development, UI/UX, digital marketing, content creation, and creative design. I work with technologies such as React, JavaScript, TypeScript, Node.js, Express, MongoDB, Firebase, and modern frontend frameworks, while continuously exploring new technologies and better ways to build. I particularly enjoy creating products that are not only technically functional but also visually polished and intuitive to use.
Beyond coding, I’ve worked on real-world projects, digital campaigns, student platforms, career-tech applications, event experiences, and interactive systems while taking on leadership and creative responsibilities. I bring a combination of technical thinking, creativity, problem-solving, and execution to my work, and I’m always looking for opportunities to build meaningful products, learn new things, and turn ambitious ideas into reality.`,
  location: 'Bengaluru, Karnataka, India',
  email: 'jeetandar.n.silwani@gmail.com',
  phone: '+91 9663926665',
  github: 'https://github.com/JEETANDAR',
  linkedin: 'https://www.linkedin.com/in/jeetandar-n-silwani-6b6863213/',
  availability: 'Available for opportunities',
  education: [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'St Pauls College, Bengaluru',
      period: '2023 – 2026',
      specialization: 'Artificial Intelligence & Cybersecurity',
      grade: 'CGPA: 7.45'
    },
    {
      degree: 'Pre-University (CEBA)',
      institution: 'Ascent PU College, Bengaluru',
      period: '2021 – 2023',
      specialization: 'Computer Science, Economics, Business Studies, Accountancy',
      grade: 'CGPA: 9.03'
    }
  ]
};

export const IMPACT_METRICS = [
  {
    value: 20,
    suffix: '+',
    label: 'Intercollegiate Awards',
    subtext: 'Across tech fests, hackathons & debugging contests'
  },
  {
    value: 2,
    suffix: '×',
    label: 'National Level Winner',
    subtext: 'AI Challenge & prestigious technical hackathons'
  },
  {
    value: 15,
    suffix: '+',
    label: 'Countries Reached',
    subtext: 'Global Study Pro outreach & campaign operations'
  },
  {
    value: 10000,
    suffix: '+',
    label: 'Data Records Analyzed',
    subtext: 'Enterprise Sales & Operations BI modeling'
  },
  {
    value: 400,
    suffix: '+',
    label: 'Active Users Supported',
    subtext: 'KAIROS live event platform authentication & billing'
  },
  {
    value: 100,
    suffix: '+',
    label: 'Digital Creatives & Assets',
    subtext: 'High-conversion visual storytelling assets'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'careerpath-app',
    slug: 'careerpath-ai-guidance',
    title: 'CareerPath — AI Career Discovery & Guidance Platform',
    subtitle: 'AI-powered mobile platform providing personalized career pathways, college discovery & course intelligence',
    category: 'Mobile & AI',
    year: '2026',
    shortDescription: 'AI-powered mobile application built in Kotlin & Android that helps students discover career trajectories, verify eligibility, examine fee structures and explore college admissions with intelligent conversational guidance.',
    fullDescription: 'CareerPath is an intelligent career discovery ecosystem built for prospective higher-education students navigating decisions across thousands of academic courses, institutions, and emerging career opportunities. Leveraging Kotlin, Android Architecture Components, Firebase, and Gemini AI endpoints, the platform aggregates structured university data with customized recommendation algorithms. Students can evaluate admission eligibility criteria, tuition fees, expected salary distributions, and enter interactive AI guidance sessions to identify customized education roadmaps aligned with their personal strengths and career ambitions.',
    image: '/images/careerpath_ai_guidance_1790493860106.jpg',
    gallery: [
      '/images/careerpath_ai_guidance_1790493860106.jpg',
      '/images/global_study_pro_app_1790487861195.jpg'
    ],
    role: 'Lead Android Developer & AI Architect',
    technologies: ['Kotlin', 'Android SDK', 'Firebase', 'Gemini AI API', 'Coroutines', 'Material Design 3', 'REST APIs'],
    features: [
      'Interactive AI-driven career exploration engine delivering personalized pathways',
      'Exhaustive college discovery directory with eligibility rules, fee structures and cutoffs',
      'Comparative salary distribution charts and industry employment outlook data',
      'Seamless Firebase Authentication and real-time cloud data synchronization',
      'Intelligent conversational advisory assistant powered by Gemini API'
    ],
    challenges: [
      'Structuring multi-layered college criteria into low-latency mobile local cache',
      'Crafting system prompts for Gemini API to deliver reliable, factual career counseling without hallucinations'
    ],
    outcome: 'Engineered a complete end-to-end guidance app that bridges student confusion with verified institutional metrics and instant AI-backed roadmaps.',
    liveUrl: 'https://github.com/JEETANDAR/Careerpath',
    githubUrl: 'https://github.com/JEETANDAR/Careerpath',
    featured: true
  },
  {
    id: 'id-card-management',
    slug: 'id-card-management-system',
    title: 'ID Card Management System',
    subtitle: 'Automated full-stack institutional platform for student record ingestion, validation & batch badge generation',
    category: 'Full-Stack Engineering',
    year: '2026',
    shortDescription: 'Full-stack software platform built with React, SQL, Express, and Node.js that automates student identity data processing, photo validation, and batch ID card generation for academic institutions.',
    fullDescription: 'Designed and deployed an enterprise-grade administrative system to eliminate manual, error-prone student identity card generation in collegiate environments. The system processes raw CSV/Excel student rosters, sanitizes personal records, verifies photo uploads according to print specifications, generates dynamic barcodes/QR codes with cryptographic integrity, and compiles ready-to-print batch PDFs in seconds.',
    image: '/images/id_card_management_1790493876602.jpg',
    gallery: [
      '/images/id_card_management_1790493876602.jpg',
      '/images/coding_club_platform_1790487875414.jpg'
    ],
    role: 'Full-Stack Software Engineer',
    technologies: ['React.js', 'Node.js', 'Express.js', 'SQL / MySQL', 'Barcode / QR Generation', 'Tailwind CSS', 'Multer'],
    features: [
      'Automated batch ingestion and schema validation for thousands of student records',
      'Real-time card preview renderer with dynamic institutional layouts and typography',
      'Automated barcode and QR code generation encoded with student verification hashes',
      'Role-based administrative control with audit trails and print status tracking',
      'Export engine generating high-resolution CMYK print-ready identity sheets'
    ],
    challenges: [
      'Handling batch photo resizing and vector alignment without degrading browser thread performance',
      'Maintaining relational integrity across departments, batch years, and blood group schemas in SQL'
    ],
    outcome: 'Reduced institutional ID card turnaround from weeks to hours, automating 100% of clerical formatting tasks and eliminating printing transcription errors.',
    liveUrl: 'https://github.com/JEETANDAR/ID-Card-Management-System',
    githubUrl: 'https://github.com/JEETANDAR/ID-Card-Management-System',
    featured: true
  },
  {
    id: 'kairos-webapp',
    slug: 'kairos-event-management',
    title: 'Kairos — Flagship Event Management Platform',
    subtitle: 'Production MERN webapp with Google Authentication & Razorpay payment integration',
    category: 'Full-Stack Engineering',
    year: '2026',
    shortDescription: 'Full-stack MERN platform built to orchestrate collegiate fest event discovery, team registrations, Google Authentication, and Razorpay payment gateway workflows for over 400 participants.',
    fullDescription: 'Engineered a centralized collegiate event management ecosystem for the premier KAIROS 2026 festival. The platform unifies the full participant lifecycle—from exploring competition rulebooks and selecting team brackets to authenticating via Google OAuth, completing secure entry transactions via Razorpay, and receiving cryptographic digital entry passes with instant email confirmations.',
    image: '/images/kairos_event_platform_1790487834623.jpg',
    gallery: [
      '/images/kairos_event_platform_1790487834623.jpg',
      '/images/coding_club_platform_1790487875414.jpg'
    ],
    role: 'Full-Stack Lead & Platform Architect',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Google OAuth 2.0', 'Razorpay Payment Gateway', 'Tailwind CSS'],
    features: [
      'One-click Google OAuth authentication eliminating traditional registration friction',
      'Full Razorpay Payment Integration handling webhook validation and instant invoicing',
      'Live dynamic stage schedule and event timeline with live venue updates',
      'Centralized organizer dashboard tracking participant counts and category receipts',
      'Mobile-first responsive architecture built for on-ground fest check-ins'
    ],
    challenges: [
      'Managing high concurrent traffic spikes during morning registration rushes',
      'Ensuring idempotent transaction processing with Razorpay webhooks to prevent duplicate ticket generation'
    ],
    outcome: 'Successfully onboarded 400+ attendees, processed collegiate registration revenues with zero failed transaction states, and cut on-ground desk verification to under 15 seconds.',
    liveUrl: 'https://kairos-client.onrender.com/',
    githubUrl: 'https://github.com/JEETANDAR',
    featured: true
  },
  {
    id: 'trinitas-global',
    slug: 'trinitas-global-education',
    title: 'Trinitas Global — Higher Education Portal',
    subtitle: 'Institutional digital portal showcasing university programs, admissions & academic partnerships',
    category: 'Web Platforms',
    year: '2026',
    shortDescription: 'Production web platform developed for Trinitas Global Education, presenting academic courses, global university tie-ups, and student advisory services with modern performance standards.',
    fullDescription: 'Architected and built the public-facing web platform for Trinitas Global, an established international education institution. The platform delivers an authoritative, high-performance web experience highlighting academic degrees, scholarship frameworks, partner university affiliations, and inquiry workflows. Emphasizes clean typography, responsive navigation, fast first-contentful paint, and intuitive admissions lead intake funnels.',
    image: '/images/global_study_pro_app_1790487861195.jpg',
    gallery: [
      '/images/global_study_pro_app_1790487861195.jpg'
    ],
    role: 'Frontend Architect & UI Developer',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive UI', 'SEO Optimization', 'Lead Capture Engine'],
    features: [
      'Comprehensive institutional catalog covering degree programs and career avenues',
      'Lead capture pipelines integrated with academic advisory representatives',
      'Fluid mobile-first responsive layouts optimized for prospective applicants and parents',
      'Clean accessibility standards and high-speed asset loading'
    ],
    challenges: [
      'Balancing comprehensive academic catalogs with clean layout breathing room and visual authority'
    ],
    outcome: 'Delivered an institutional digital presence that elevated brand authority and increased monthly student inquiry volume.',
    liveUrl: 'https://trinitasglobaledu.com/',
    githubUrl: 'https://github.com/JEETANDAR',
    featured: true
  },
  {
    id: 'oracle-fest',
    slug: 'oracle-department-festival',
    title: 'Oracle — Department Tech Symposium Portal',
    subtitle: 'Official web platform for the annual Computer Science department technical festival',
    category: 'Event & Web Platforms',
    year: '2025 – 2026',
    shortDescription: 'Interactive festival portal for the Oracle departmental tech symposium, featuring competition matrices, schedule timelines, registration portals, and leaderboard displays.',
    fullDescription: 'As Department President and technical lead, developed the official digital portal for "Oracle"—the department of computer science flagship technical fest. Designed with a cyber-futuristic dark visual motif, the platform allowed intercollegiate participants to explore technical coding events, debugging arenas, gaming tourneys, and hackathons, complete with rulebooks and automated slot allocation.',
    image: '/images/coding_club_platform_1790487875414.jpg',
    gallery: [
      '/images/coding_club_platform_1790487875414.jpg'
    ],
    role: 'Technical Lead & Department President',
    technologies: ['JavaScript', 'HTML5/CSS3', 'Responsive Design', 'Event Management UI', 'Web Performance'],
    features: [
      'Comprehensive event breakdown spanning coding, debugging, web design, and quiz challenges',
      'Interactive timeline tracking round qualifiers and venue locations',
      'Live coordination hub for organizing committee announcements and contact desks',
      'Optimized lightweight asset delivery ensuring instant loading on mobile devices'
    ],
    challenges: [
      'Coordinating rapid updates to event schedules and venue rooms during live festival execution'
    ],
    outcome: 'Connected multiple intercollegiate colleges to the departmental fest, facilitating smooth paperless team registrations.',
    liveUrl: 'http://oracle.spcpegasus.com/',
    githubUrl: 'https://github.com/JEETANDAR',
    featured: false
  },
  {
    id: 'hackathon-portal',
    slug: 'hackathon-event-platform',
    title: 'Pegasus Hackathon Platform',
    subtitle: 'Competitive coding & 24-hour collegiate hackathon registration and problem statement hub',
    category: 'Event & Web Platforms',
    year: '2025 – 2026',
    shortDescription: 'Dedicated web platform built for collegiate hackathon participants featuring real-time countdown timers, problem tracks, mentor directory, and team registration workflows.',
    fullDescription: 'Developed the official web platform for the university 24-hour hackathon hosted under Pegasus. Designed to handle competitive developer traffic, the platform showcases tracks across AI, Web3, FinTech, and Social Good, provides live problem statement disclosures, links to submission guidelines, and integrates Discord/WhatsApp community hubs.',
    image: '/images/coding_club_platform_1790487875414.jpg',
    gallery: [
      '/images/coding_club_platform_1790487875414.jpg'
    ],
    role: 'Frontend Developer & Hackathon Coordinator',
    technologies: ['React', 'Tailwind CSS', 'Countdown Timers', 'Registration System', 'Modern UI'],
    features: [
      'Live synchronized hackathon launch countdown and track release mechanism',
      'Detailed domain tracks with evaluation rubrics and submission criteria',
      'Team registration forms with teammate roster validation',
      'Sponsor showcase and mentor schedule booking interface'
    ],
    challenges: [
      'Creating high-energy visual typography and layout that resonated with competitive student coders'
    ],
    outcome: 'Served over 50 competing teams with zero registration errors, hosting live problem statements during opening ceremony.',
    liveUrl: 'https://hackathon.spcpegasus.com/',
    githubUrl: 'https://github.com/JEETANDAR',
    featured: false
  },
  {
    id: 'admission-advisor',
    slug: 'admission-advisor-app',
    title: 'Admission Advisor — College Matching Engine',
    subtitle: 'Comprehensive educational portal facilitating student college discovery & counselor advisory',
    category: 'Full-Stack Engineering',
    year: '2026',
    shortDescription: 'Application connecting aspiring students with verified colleges and experienced academic counselors, featuring course comparison, eligibility checks, and advisory appointment booking.',
    fullDescription: 'Engineered an educational advisory application that bridges the gap between prospective college applicants and experienced admission counselors. The system allows students to filter institutions by location, stream, fee structure, and accreditation ratings, while providing dedicated counselor dashboards to evaluate candidate profiles and recommend suitable collegiate options.',
    image: '/images/global_study_pro_app_1790487861195.jpg',
    gallery: [
      '/images/global_study_pro_app_1790487861195.jpg'
    ],
    role: 'Full Stack Engineer',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB / SQL', 'REST APIs', 'Advisory Matching'],
    features: [
      'Multi-parameter institutional search with instant filtering by course, state, and fee band',
      'Counselor lead management dashboard with applicant status tracking',
      'Comparative college matrix examining placement records, faculty, and campus infrastructure',
      'Direct consultation appointment booking system'
    ],
    challenges: [
      'Architecting query filters that dynamically narrow down hundreds of college degrees in real time'
    ],
    outcome: 'Streamlined the admission advisory process, reducing manual counselor inquiry follow-ups by over 50%.',
    liveUrl: 'https://github.com/JEETANDAR',
    githubUrl: 'https://github.com/JEETANDAR',
    featured: false
  },
  {
    id: 'faculty-development-program',
    slug: 'faculty-development-program-portal',
    title: 'Faculty Development Program (FDP) Portal',
    subtitle: 'Academic conference & workshop registration portal with Razorpay payment integration',
    category: 'Full-Stack Engineering',
    year: '2025 – 2026',
    shortDescription: 'Official conference and workshop registration platform engineered for institutional Faculty Development Programs, with full Razorpay payment processing and automatic receipt generation.',
    fullDescription: 'Developed a responsive web platform to facilitate academic conferences and faculty development initiatives at St Pauls College. Built to replace manual paper registration, the platform details keynote speaker schedules, academic modules, and accreditation units, while integrating Razorpay for seamless fee processing and automated registration confirmation receipts.',
    image: '/images/sales_powerbi_dashboard_1790487847305.jpg',
    gallery: [
      '/images/sales_powerbi_dashboard_1790487847305.jpg'
    ],
    role: 'Full Stack Developer',
    technologies: ['React', 'Node.js', 'Express', 'Razorpay Payment Gateway', 'MongoDB', 'Receipt Generation'],
    features: [
      'Direct Razorpay payment gateway integration supporting UPI, Cards, and Net Banking',
      'Automated PDF invoice and participant confirmation generation upon successful transaction',
      'Comprehensive syllabus and distinguished keynote speaker itinerary showcase',
      'Administrative back-office export for attendee badges and financial audits'
    ],
    challenges: [
      'Handling transaction reconciliation and ensuring educators received instant payment acknowledgments'
    ],
    outcome: 'Eliminated manual accounting overhead, successfully registering academic faculty participants across multiple collegiate institutions.',
    liveUrl: 'https://fdp.spcpegasus.com/',
    githubUrl: 'https://github.com/JEETANDAR',
    featured: false
  },
  {
    id: 'blinkit-analytics',
    slug: 'blinkit-data-analytics',
    title: 'Blinkit Quick-Commerce Business Intelligence',
    subtitle: 'Comprehensive operational data analytics evaluating order fulfillment, inventory metrics & customer cohorts',
    category: 'Data & Analytics',
    year: '2026',
    shortDescription: 'In-depth data analytics and business intelligence project modeling Blinkit quick-commerce transactional data, delivery turnarounds, customer purchasing cohorts, and SKU margin trends.',
    fullDescription: 'Conducted an extensive data analytics case study on quick-commerce retail dynamics modeled around Blinkit operational metrics. Utilizing Power BI, DAX formulas, Python data cleaning scripts, and SQL queries, analyzed thousands of transactional records to evaluate 10-minute delivery compliance, SKU item turnover, peak demand clusters, regional order density, and churn correlations.',
    image: '/images/blinkit_analytics_dash_1790493895973.jpg',
    gallery: [
      '/images/blinkit_analytics_dash_1790493895973.jpg',
      '/images/sales_powerbi_dashboard_1790487847305.jpg'
    ],
    role: 'Data Analyst & BI Modeler',
    technologies: ['Power BI', 'DAX', 'Python (Pandas)', 'SQL', 'Data Modeling', 'Business Intelligence'],
    features: [
      'Interactive executive KPI dashboard tracking Average Order Value (AOV) and gross margins',
      'Geospatial and hourly order density heatmaps identifying dark store fulfillment bottlenecks',
      'Customer cohort retention modeling analyzing repeat order frequencies and cart abandons',
      'SKU-level profitability breakdown and stock-out frequency indicators'
    ],
    challenges: [
      'Cleaning multi-source transactional datasets with missing timestamps and anomalous delivery durations'
    ],
    outcome: 'Formulated actionable operational insights highlighting dark-store load rebalancing strategies and key inventory replenishment triggers.',
    liveUrl: 'https://github.com/JEETANDAR',
    githubUrl: 'https://github.com/JEETANDAR',
    featured: true
  },
  {
    id: 'quiz-platform',
    slug: 'interactive-quiz-platform',
    title: 'Real-Time Interactive Quiz Platform',
    subtitle: 'Kahoot-style live competitive quiz application with timed questions, host controls & podium leaderboard',
    category: 'Interactive Apps',
    year: '2025 – 2026',
    shortDescription: 'Real-time multiplayer quiz platform featuring live question countdowns, synchronized host controls, PIN-based room lobbies, and dynamic podium leaderboards.',
    fullDescription: 'Engineered a high-energy, real-time quiz application inspired by Kahoot for live classroom battles and technical fest quiz competitions. Using React for the responsive participant client and Node.js with WebSockets for the live broadcast engine, the platform allows hosts to create custom question banks, launch live games with pin codes, and calculate instant score multipliers based on response velocity.',
    image: '/images/quiz_kahoot_web_1790493912481.jpg',
    gallery: [
      '/images/quiz_kahoot_web_1790493912481.jpg'
    ],
    role: 'Full Stack Engineer',
    technologies: ['React', 'Node.js', 'Express', 'WebSockets / Socket.io', 'Tailwind CSS', 'State Management'],
    features: [
      'PIN-based game lobby supporting instant participant room joining from mobile devices',
      'Live synchronized countdown timer with question point multipliers for response speed',
      'Host control panel to pause, advance questions, and broadcast instant answer reveals',
      'Animated celebratory podium leaderboard highlighting top three competitors'
    ],
    challenges: [
      'Maintaining millisecond-level synchronization across concurrent mobile participant clients during timed rounds'
    ],
    outcome: 'Deployed in college quiz battles with dozens of simultaneous contestants, delivering zero latency lag during live rounds.',
    liveUrl: 'https://github.com/JEETANDAR',
    githubUrl: 'https://github.com/JEETANDAR',
    featured: false
  },
  {
    id: 'e-photobooth',
    slug: 'digital-polaroid-photobooth',
    title: 'E-Photobooth — Digital Instant Polaroid Studio',
    subtitle: 'Browser-based camera studio with custom frames, vintage retro filters & instant photo export',
    category: 'Interactive Apps',
    year: '2026',
    shortDescription: 'Digital browser-based photobooth where users take live webcam snaps, customize Polaroid frames and digital stickers, and download/share vintage-style photo strips.',
    fullDescription: 'Created a creative web-based instant camera application that turns any laptop or smartphone browser into an interactive photobooth. Using the HTML5 MediaDevices WebRTC API and Canvas 2D rendering, users can take multi-shot series, apply retro film color grading filters, customize festive borders, add date stamps, and export high-resolution Polaroid digital keepsakes ready for social sharing.',
    image: '/images/photobooth_polaroid_1790493927204.jpg',
    gallery: [
      '/images/photobooth_polaroid_1790493927204.jpg'
    ],
    role: 'Creative Frontend Developer',
    technologies: ['React', 'HTML5 Canvas API', 'WebRTC MediaDevices', 'Tailwind CSS', 'Image Processing'],
    features: [
      'Live camera feed with 3-second countdown flash and continuous multi-shot capture',
      'Customizable Polaroid frame templates with handwriting font captions and date stamps',
      'Real-time vintage film filters (Monochrome, Warm Vintage, Cool Cyber, Sepia)',
      '1-click instant PNG/JPEG download and direct device share integration'
    ],
    challenges: [
      'Ensuring client-side canvas compositing renders at crisp high resolution without pixelation on mobile screens'
    ],
    outcome: 'Used enthusiastically during college cultural events by hundreds of students to create branded digital photo memories.',
    liveUrl: 'https://github.com/JEETANDAR',
    githubUrl: 'https://github.com/JEETANDAR',
    featured: false
  },
  {
    id: 'taskit-app',
    slug: 'taskit-productivity-analytics',
    title: 'TaskIt — Task Management & Productivity Analytics',
    subtitle: 'Modern task tracker with priority matrices, workflow timers & data analytics charts',
    category: 'Interactive Apps',
    year: '2025 – 2026',
    shortDescription: 'Productivity application combining intuitive task tracking, Eisenhower priority matrices, and data analytics dashboards that visualize weekly completion velocity and work patterns.',
    fullDescription: 'Developed TaskIt to elevate traditional to-do lists into a comprehensive personal productivity intelligence tool. Built with React and TypeScript, TaskIt tracks tasks across categories, sets deadline alarms, and incorporates visual analytics charts to help users understand their peak productive hours, recurring bottlenecks, and goal completion rates.',
    image: '/images/sales_powerbi_dashboard_1790487847305.jpg',
    gallery: [
      '/images/sales_powerbi_dashboard_1790487847305.jpg'
    ],
    role: 'Frontend & Data Developer',
    technologies: ['React', 'TypeScript', 'Data Analytics', 'Chart.js', 'Tailwind CSS', 'Local State Storage'],
    features: [
      'Intuitive task organization with tags, priority flags, and subtask checklists',
      'Visual productivity metrics: weekly completion velocity, category distribution, and streak counter',
      'Pomodoro focus session timer linked directly to active task items',
      'Offline-first persistence ensuring zero data loss across browser reloads'
    ],
    challenges: [
      'Designing lightweight analytics aggregations that calculate real-time trends without slowing down client interactions'
    ],
    outcome: 'Created a daily driver productivity tool adopted by peers for tracking academic deadlines and project milestones.',
    liveUrl: 'https://github.com/JEETANDAR',
    githubUrl: 'https://github.com/JEETANDAR',
    featured: false
  },
  {
    id: 'e-birthday-invite',
    slug: 'interactive-birthday-invitation',
    title: 'E-Birthday Invite — Interactive Digital Celebration',
    subtitle: 'Vibrant interactive celebration website featuring personalized animations, RSVP & countdown',
    category: 'Interactive Apps',
    year: '2025',
    shortDescription: 'Interactive digital celebration invitation website built with lively animations, event countdown, personalized RSVP mechanism, location map, and party theme previews.',
    fullDescription: 'Designed an engaging digital alternative to static paper invitations. The web experience features festive interactive animations, background music playback with user control, an accurate countdown clock to party time, embedded Google Maps venue directions, and an interactive RSVP guest response module.',
    image: '/images/kairos_event_platform_1790487834623.jpg',
    gallery: [
      '/images/kairos_event_platform_1790487834623.jpg'
    ],
    role: 'Creative Web Developer',
    technologies: ['HTML5', 'CSS3 Animations', 'JavaScript', 'Audio API', 'Netlify Deployment', 'Responsive UI'],
    features: [
      'Interactive animated party curtain reveal with custom audio score',
      'Real-time dynamic countdown to celebration date and time',
      'RSVP confirmation module collecting guest attendance responses',
      'Embedded venue navigation with 1-click Google Maps integration'
    ],
    challenges: [
      'Handling browser autoplay audio policy restrictions gracefully with intuitive user tap interactions'
    ],
    outcome: 'Provided a delightful digital experience that saw 100% guest engagement and timely RSVP confirmations.',
    liveUrl: 'https://birthday-invite-mini-project.netlify.app/',
    githubUrl: 'https://github.com/JEETANDAR',
    featured: false
  },
  {
    id: 'kairos-faculty-invite',
    slug: 'kairos-faculty-invitation',
    title: 'Kairos Faculty Invitation Portal',
    subtitle: 'Dedicated digital VIP invitation portal designed for faculty dignitaries & academic leadership',
    category: 'Event & Web Platforms',
    year: '2026',
    shortDescription: 'Specialized digital invitation and itinerary portal designed specifically to invite faculty, department heads, and academic leaders to the Kairos intercollegiate festival.',
    fullDescription: 'To honor esteemed college faculty and institutional leadership, engineered a bespoke VIP digital invitation portal for the Kairos festival. The website provides formal felicitations, highlights exclusive dignitary event schedules, outlines inaugurations, and provides a streamlined digital RSVP for faculty attendance coordination.',
    image: '/images/kairos_event_platform_1790487834623.jpg',
    gallery: [
      '/images/kairos_event_platform_1790487834623.jpg'
    ],
    role: 'Lead Developer & Fest Organizer',
    technologies: ['React', 'Tailwind CSS', 'Micro-interactions', 'Responsive Design', 'VIP Experience'],
    features: [
      'Tailored institutional letter of invitation with formal academic protocol',
      'VIP itinerary detailing inauguration, judge felicitations, and valedictory ceremonies',
      'Direct faculty RSVP response coordination for seating and hospitality planning',
      'Elegant high-contrast editorial typography reflecting institutional prestige'
    ],
    challenges: [
      'Delivering a refined, formal aesthetic that resonated with senior academic leadership'
    ],
    outcome: 'Streamlined faculty invitations for the flagship fest, receiving commendations from departmental heads.',
    liveUrl: 'https://kairos-client.onrender.com/',
    githubUrl: 'https://github.com/JEETANDAR',
    featured: false
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'global-study-pro-dev',
    company: 'Global Study Pro',
    role: 'App Developer & Social Media Manager',
    period: 'May 2026 – Present',
    location: 'Bengaluru, India',
    description: 'Leading mobile and web application development, responsive UI optimization, and cross-channel digital marketing campaigns for an international education platform.',
    highlights: [
      'Engineered and maintained mobile and web application features with focus on responsive UI, fast client rendering, and zero-friction navigation',
      'Orchestrated multi-channel social media platforms, producing 100+ digital creatives, campaigns, and promotional content to amplify brand engagement and outreach',
      'Partnered closely with product and counseling teams to streamline student onboarding workflows and improve lead conversion'
    ],
    technologies: ['React', 'JavaScript', 'Full Stack Development', 'Social Media Strategy', 'Digital Marketing', 'REST APIs', 'UI/UX']
  },
  {
    id: 'global-study-pro-intern',
    company: 'Global Study Pro',
    role: 'Marketing & Design Specialist',
    period: 'March 2026 – April 2026',
    location: 'Bengaluru, India',
    description: 'Executed international student acquisition campaigns, visual assets, and conversion funnels across global academic markets.',
    highlights: [
      'Executed digital marketing campaigns targeting prospective students across 15+ countries for academic programs in India and abroad',
      'Collaborated with admissions teams to achieve ~90% conversion rate on targeted cohorts through data-backed outreach strategies',
      'Formulated visual content guidelines and high-converting creative ad sets that boosted brand trust and click-through rates'
    ],
    technologies: ['Digital Campaigns', 'Figma', 'Visual Storytelling', 'Funnel Analytics', 'Cross-Border Marketing']
  },
  {
    id: 'st-pauls-dev',
    company: 'St Pauls College',
    role: 'Software Developer',
    period: 'October 2025 – March 2026',
    location: 'Bengaluru, India',
    description: 'Supported full lifecycle SDLC operations, backend engineering, testing, and REST API optimization for institutional software platforms.',
    highlights: [
      'Participated in all core SDLC phases including requirements analysis, test-driven development, and quality assurance',
      'Built and validated REST-based backend modules that improved data retrieval efficiency by 45%',
      'Authored rigorous test suites, conducted debugging, and performed root cause analysis to eliminate critical software regressions'
    ],
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Software Testing & QA', 'SDLC', 'Debugging']
  },
  {
    id: 'ey-intern',
    company: 'Ernst & Young — Edunet Foundation',
    role: 'Full Stack Developer',
    period: 'February 2025 – March 2025',
    location: 'Remote / Virtual Delivery',
    description: 'Supported application operations, query optimization, and incident resolution in a process-driven enterprise delivery setting.',
    highlights: [
      'Supported enterprise application operations and incident troubleshooting in strict process-driven client delivery cycles',
      'Optimized backend queries and API responses, reducing payload overhead and improving application performance by 30%',
      'Collaborated on database query tuning and indexing to alleviate server bottlenecks under concurrent loads'
    ],
    technologies: ['Full Stack Development', 'Database Optimization', 'Query Tuning', 'API Performance', 'Incident Resolution']
  },
  {
    id: 'ibm-cybersecurity',
    company: 'IBM SkillsBuild — Edunet Foundation',
    role: 'Cybersecurity Associate',
    period: 'January 2025 – February 2025',
    location: 'Virtual',
    description: 'Applied analytical problem-solving to security assessments, secure coding principles, and compliance frameworks.',
    highlights: [
      'Applied analytical problem-solving to real-world security scenarios, strengthening secure coding standards',
      'Gained hands-on exposure to enterprise cybersecurity risk assessment frameworks and compliance guidelines',
      'Investigated vulnerability patterns and authored defensive remediation strategies'
    ],
    technologies: ['Cybersecurity', 'Secure Coding', 'Risk Assessment', 'Vulnerability Analysis', 'OWASP Standards']
  },
  {
    id: 'ibm-cloud-ai',
    company: 'IBM SkillsBuild — Edunet Foundation',
    role: 'AI & Cloud Associate',
    period: 'July 2024 – August 2024',
    location: 'Virtual',
    description: 'Explored cloud application deployment architectures, artificial intelligence APIs, and containerized workflows.',
    highlights: [
      'Gained hands-on exposure to cloud deployment workflows, microservice APIs, and secure access fundamentals',
      'Earned verifiable IBM digital badges in Artificial Intelligence, Cloud Services, and Secure Application Development',
      'Evaluated machine learning endpoint integration into full-stack web architectures'
    ],
    technologies: ['Cloud APIs', 'Artificial Intelligence', 'Cloud Deployment', 'Application Security']
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Software Development & Full Stack',
    description: 'Robust client and server architectures built for scalability, reliability, and performance.',
    skills: [
      { name: 'React.js', context: 'Primary frontend framework across 10+ web and enterprise applications' },
      { name: 'Node.js & Express.js', context: 'RESTful API architecture, authentication middleware & payment webhooks' },
      { name: 'JavaScript & TypeScript', context: 'Modern ES6+, async architecture, strict typing & interfaces' },
      { name: 'Kotlin & Android', context: 'Native Android app development in CareerPath with Coroutines & Material 3' },
      { name: 'Payment & Auth Integration', context: 'Razorpay payment gateways & Google OAuth 2.0 implementations' },
      { name: 'Tailwind CSS', context: 'Atomic design tokens, dark mode systems, and responsive layouts' }
    ]
  },
  {
    title: 'Systems & Databases',
    description: 'Persistent data modeling, normalization, query optimization, and retrieval efficiency.',
    skills: [
      { name: 'MongoDB', context: 'Document modeling, aggregation pipelines, schema validation in MERN' },
      { name: 'SQL & MySQL', context: 'Relational schema design, complex joins, indexing & query tuning' },
      { name: 'Data Structures & Algorithms', context: 'Time/space complexity optimization, algorithmic problem-solving' },
      { name: 'Operating Systems & Networking', context: 'TCP/IP, HTTP/HTTPS, OSI layer abstractions & protocol flows' },
      { name: 'DBMS Fundamentals', context: 'ACID transactions, concurrency control & database recovery' }
    ]
  },
  {
    title: 'Data & Analytics',
    description: 'Translating complex multi-source data into actionable business and operational intelligence.',
    skills: [
      { name: 'Power BI', context: 'Enterprise dashboards with cross-filtering, drill-down KPIs & heatmaps' },
      { name: 'DAX & Data Modeling', context: 'Complex calculated measures, time intelligence & Star Schema models' },
      { name: 'Blinkit & Sales Analytics', context: 'Quick-commerce operational fulfillment & 10,000+ transactional records' },
      { name: 'Python Analytics', context: 'Data cleaning, pandas scripting, dataset normalization & anomaly spotting' },
      { name: 'Advanced Excel', context: 'Pivot tables, VLOOKUP/XLOOKUP, and business financial models' }
    ]
  },
  {
    title: 'Software Engineering & Security',
    description: 'Enterprise quality standards, secure development lifecycle, and defensive engineering.',
    skills: [
      { name: 'SDLC & Agile Delivery', context: 'Sprint planning, peer review, continuous integration & release cycles' },
      { name: 'Software Testing & QA', context: 'Unit testing, regression validation & edge verification' },
      { name: 'Root Cause Analysis', context: 'Systematic debugging, incident troubleshooting & post-mortems' },
      { name: 'Secure Coding Practices', context: 'Input sanitation, JWT verification, OWASP risk awareness' },
      { name: 'Cloud & API Integration', context: 'Third-party OAuth, payment webhooks & cloud deployment' }
    ]
  },
  {
    title: 'Social Media, Digital & Creative',
    description: 'Creating high-engagement visual storytelling and data-backed digital campaigns.',
    skills: [
      { name: 'Digital Marketing & Strategy', context: 'International student acquisition campaigns across 15+ countries' },
      { name: 'Social Media Management', context: 'Led social accounts and published 100+ high-engagement creatives' },
      { name: 'Visual Storytelling', context: 'Director of Photography for narrative short films & video campaigns' },
      { name: 'UI / UX Design', context: 'Wireframing, typography hierarchy, micro-interactions & user journeys' },
      { name: 'Campaign Funnel Optimization', context: 'Achieved ~90% conversion rates on targeted student cohorts' }
    ]
  },
  {
    title: 'Tools & Ecosystem',
    description: 'Day-to-day toolchain for productive engineering and creative collaboration.',
    skills: [
      { name: 'Git & GitHub', context: 'Branching strategies, PR reviews, CI workflows' },
      { name: 'VS Code & Android Studio', context: 'Primary development IDEs for web, server, and native mobile apps' },
      { name: 'Postman', context: 'API debugging, mock servers, and automated endpoint testing' },
      { name: 'Figma', context: 'Rapid prototyping, layout tokens & component specifications' },
      { name: 'Adobe Premiere / Canva', context: 'Video editing, motion graphics, and digital marketing creatives' }
    ]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'ai-challenge-winner',
    title: 'National Level Winner — AI Challenge',
    subtitle: '1st Place across national collegiate competition',
    organization: 'National Collegiate Tech Council',
    category: 'National Winner',
    year: '2025',
    description: 'Secured first place nationwide by architecting a cutting-edge artificial intelligence solution evaluating automated decision pipelines.'
  },
  {
    id: 'webathon-runner',
    title: 'National Level Runner — Webathon',
    subtitle: 'National 24-hour hackathon showcase',
    organization: 'All-India Tech Consortium',
    category: 'National Winner',
    year: '2025',
    description: 'Awarded national runner-up honors in an intensive high-velocity web product hackathon for building a scalable community management tool.'
  },
  {
    id: 'coding-debugging-winner',
    title: 'State Level Winner — Coding & Debugging',
    subtitle: 'Karnataka State Level Intercollegiate Competition',
    organization: 'Inter-University Tech Council',
    category: 'National Winner',
    year: '2024',
    description: 'Demonstrated exceptional algorithmic rigor and root-cause analysis speed, solving competitive bug injection scenarios under strict time constraints.'
  },
  {
    id: 'dept-president',
    title: 'President — Department of Computer Science',
    subtitle: 'Elected departmental leader & technical head',
    organization: 'St Pauls College, Bengaluru',
    category: 'Leadership',
    year: '2025 – 2026',
    description: 'Leading a community of 200+ computer science students, organizing technical bootcamps, managing faculty liaison, and mentoring junior cohorts.'
  },
  {
    id: 'founder-11-11',
    title: 'Founder — 11:11 Community',
    subtitle: 'Initiative championing youth collaboration, creativity & tech empowerment',
    organization: '11:11 Community',
    category: 'Leadership',
    year: '2025 – Present',
    description: 'Founded and grew the 11:11 Community, creating high-energy collaborative environments, creative meetups, and experiential initiatives for ambitious young creators and developers.'
  },
  {
    id: 'under25-community',
    title: 'Under 25 — India\'s Largest Youth Community',
    subtitle: 'Active community leader & cultural vanguard',
    organization: 'Under 25 Universe',
    category: 'Leadership',
    year: '2024 – Present',
    description: 'Part of India\'s largest youth community network, collaborating on large-scale youth festivals, student creator collectives, and creative experiential productions across Bengaluru.'
  },
  {
    id: 'judge-tech-nontech',
    title: 'Judge — Tech & Non-Tech Competitions',
    subtitle: 'Invited jury member evaluating code, design & creative arenas',
    organization: 'Collegiate Festivals & Tech Forums',
    category: 'Leadership',
    year: '2025 – 2026',
    description: 'Served as an official jury member evaluating collegiate hackathons, debugging face-offs, digital media contests, and cultural/creative showcases across partner institutions.'
  },
  {
    id: 'hackathon-campus-crew',
    title: 'Hackathon Campus Crew',
    subtitle: 'Campus tech community organizing & developer enablement',
    organization: 'Collegiate Hackathons & Tech Chapters',
    category: 'Leadership',
    year: '2025 – 2026',
    description: 'Core campus crew coordinating 24-hour hackathons, mentor logistics, live problem statement rollouts, and hands-on developer workshops for student builders.'
  },
  {
    id: 'fest-organizer',
    title: 'Fest Organizer — KAIROS 2026',
    subtitle: 'Flagship intercollegiate festival directorate',
    organization: 'St Pauls College',
    category: 'Leadership',
    year: '2026',
    description: 'Managed festival logistics, digital infrastructure, participant reception, budget tracking, and technical operations for 400+ attendees.'
  },
  {
    id: 'awards-collection',
    title: '20+ Intercollegiate Awards',
    subtitle: 'Recognized across 30+ collegiate events and state symposiums',
    organization: 'Premier Institutions Across South India',
    category: 'National Winner',
    year: '2023 – 2026',
    description: 'Consistently recognized on podium finishes in technical paper presentations, hackathons, web designing, and algorithmic challenges.'
  },
  {
    id: 'dop-creative',
    title: 'Director of Photography — Short Film Projects',
    subtitle: 'Creative cinematography & visual direction',
    organization: 'Independent Creative Productions',
    category: 'Creative',
    year: '2024 – 2026',
    description: 'Directed lighting, camera movement, and aesthetic grading for independent narrative productions, infusing cinematic storytelling into tech products.'
  },
  {
    id: 'certifications-suite',
    title: 'Deloitte, Accenture, IBM & TCS Certifications',
    subtitle: 'Verified professional industry accreditations',
    organization: 'Deloitte · Accenture · IBM · TCS iON',
    category: 'Certification',
    year: '2024 – 2025',
    description: 'Certified in Software Development (Deloitte & Accenture), IBM Data Analyst, IBM Cyber Security, and TCS iON EDGE Professional Skill Development.'
  }
];

export const WORK_PHILOSOPHY = [
  {
    step: '01',
    title: 'Discover',
    tagline: 'Understand the underlying problem space',
    description: 'Every meaningful system starts by diagnosing the core constraint rather than jumping to code. I interrogate user behaviors, business realities, and operational friction points.'
  },
  {
    step: '02',
    title: 'Design',
    tagline: 'Shape architecture, contracts & experience',
    description: 'I design data models, clean API contracts, and user journeys simultaneously. Clean UI without structural thinking is superficial; scalable architecture without empathy is unusable.'
  },
  {
    step: '03',
    title: 'Build',
    tagline: 'Turn blueprints into resilient software',
    description: 'Hands-on implementation with type safety, clean component boundaries, modular service layers, and rapid iterative cycles. No bloat, no unnecessary abstractions.'
  },
  {
    step: '04',
    title: 'Refine',
    tagline: 'Measure, optimize, and ship to production',
    description: 'Software is never finished when it first runs. I profile query latencies, optimize rendering passes, verify security invariants, and measure concrete user adoption metrics.'
  }
];
