export const navItems = ['Home', 'About', 'Skills', 'Timeline', 'Projects', 'Contact']

// Phrases the banner cycles through after "Building".
export const roles = [
  'full-stack platforms with Spring Boot',
  'AI-powered products',
  'React interfaces',
  'data-driven applications',
]

export const marquee = [
  'JAVA / PYTHON / SQL / REACT /',
  'SPRING BOOT / REST APIS / GRAPHQL /',
  'FULL STACK / AWS / OPENAI /',
]

// Core skills only. The project cards carry the finer details.
export const skills = [
  { group: 'Languages', items: ['Java', 'Python', 'SQL', 'JavaScript'] },
  { group: 'Frontend', items: ['React', 'React Hooks', 'React Router', 'HTML5', 'CSS3', 'Tailwind CSS', 'Material UI'] },
  { group: 'Backend', items: ['Spring Boot', 'Spring Data JPA', 'REST APIs', 'GraphQL', 'FastAPI', 'Flask'] },
  { group: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB'] },
  { group: 'Security', items: ['Spring Security', 'JWT', 'RBAC', 'Session Management'] },
  { group: 'DevOps & Cloud', items: ['AWS', 'Docker', 'Kubernetes', 'nginx', 'Pub/Sub'] },
  { group: 'Testing', items: ['JUnit', 'Vitest', 'Playwright'] },
  { group: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Maven', 'Postman', 'Power BI'] },
  {
    group: 'AI/ML',
    items: ['OpenAI', 'Claude API', 'RAG', 'Machine Learning', 'TensorFlow', 'Pandas', 'NumPy', 'scikit-learn', 'OCR'],
  },
]

export const education = [
  { degree: 'B.Tech, Computer Science', school: 'VIT-AP University, Amaravati', year: '2022 – Present', score: '9.10' },
  { degree: 'Class XII (BIEAP)', school: 'Tirumala Junior College', year: '2021 – 2022', score: '9.63' },
  { degree: 'Class X (SSC)', school: 'Nava Teja School', year: '2019 – 2020', score: '9.58' },
]

export const certifications = [
  { name: 'AWS Certified Cloud Practitioner', issuer: 'AWS', done: true },
  { name: 'MongoDB Database Administrator', issuer: 'MongoDB', done: true },
  { name: 'Oracle GenAI Certification', issuer: 'Oracle', done: true },
  { name: 'Gemini Enterprise Certified Partner Specialist', issuer: 'Google', done: true },
  { name: 'Google Cloud Practitioner', issuer: 'Google Cloud', done: false },
  { name: 'Claude Certified Developer Foundations', issuer: 'Anthropic', done: false },
]

export const coursework = [
  'Data Structures and Algorithms',
  'Object-Oriented Programming',
  'Database Management Systems',
  'Operating Systems',
  'Software Development Life Cycle',
]

export const leadership = [
  'Member, Designing Team – Photography Club, VIT-AP University',
  'Participated in Google DevSprint Hackathon 2025',
]

// Timeline, newest first. Only the facts already on the site are used.
// Edit the `when` labels to exact dates (e.g. 'Jun 2026') whenever you like.
export const timeline = [
  {
    when: 'Present',
    now: true,
    title: 'Associate Technical Consultant',
    place: 'Perficient India',
    text: 'AI Product Development team. Building AI-powered, data-driven applications with React, Java, Python, SQL and GenAI workflows.',
  },
  {
    when: '2025',
    title: 'Google DevSprint Hackathon',
    place: 'Participant',
    text: 'Took part in the Google DevSprint Hackathon 2025.',
  },
  {
    when: 'Certified',
    title: 'Cloud, database and GenAI certifications',
    place: 'AWS · MongoDB · Oracle',
    text: 'Completed: AWS Certified Cloud Practitioner, MongoDB Database Administrator, Oracle GenAI and Gemini Enterprise Certified Partner Specialist. In progress: Google Cloud Practitioner and Claude Certified Developer Foundations.',
  },
  {
    when: '2024 – 2026',
    title: 'Seven projects shipped',
    place: 'GitHub',
    text: 'Advisor 360, PharmaFlow, PageTurn, MindMate, Stock Price Prediction, Food Dhuniya and Bank Management System, from AI chatbots to full-stack platforms.',
  },
  {
    when: 'Campus',
    title: 'Designing Team Member',
    place: 'Photography Club, VIT-AP University',
    text: 'Part of the designing team of the Photography Club.',
  },
  {
    when: '2022 – Present',
    title: 'Computer Science Undergraduate',
    place: 'VIT-AP University',
    text: 'CGPA 9.10. Coursework in DSA, OOP, DBMS, Operating Systems and SDLC.',
  },
]
