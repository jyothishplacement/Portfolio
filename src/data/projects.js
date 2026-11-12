const base = import.meta.env.BASE_URL

// image: shown at the top of the card. Projects without one get a plain cover built from `kind`.
export const projects = [
  {
    title: 'Advisor 360',
    kind: 'Wealth-management platform',
    cats: ['Full-stack', 'Java'],
    description:
      'Advisor workspace built on a New Account Opening system. From an approved client to a decision: risk rules (equity above 80%, cash above 25%, one stock above 30%) raise alerts, each with a recommendation the advisor accepts or dismisses, and every step is audited.',
    image: `${base}projects/advisor-360.jpg`,
    points: [
      '36 tasks in 8 milestones, tests first: 3,166 backend and 1,617 frontend tests passing.',
      'HttpOnly session cookie with a CSRF header on every change; exact money maths with BigDecimal.',
      'Optional AI wording is used only if every number in it matches the computed figures.',
    ],
    tags: ['Java 21', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'React.js', 'Claude API', 'OCR'],
    repo: 'https://github.com/Perficient-Corporate/GGTP_BLR_PD_SEP_26/tree/jyothish/Projects/Individual/Jyothish-Boyina/Week%207/Capstone%207/nao',
    demo: '',
  },
  {
    title: 'PharmaFlow',
    kind: 'Pharmacy-chain platform',
    cats: ['Full-stack', 'Java', 'AI / ML'],
    description:
      'Platform for a chain of 25 pharmacies and a central warehouse: point of sale, stock ledger, procurement, transfers, recalls and demand forecasting.',
    image: `${base}projects/pharmaflow.jpg`,
    points: [
      'Spring Boot is the system of record; FastAPI serves forecasts behind JWT and a circuit breaker; Pub/Sub carries events between them.',
      'Five user roles across 23 screens, deployed on Kubernetes.',
      'Postman suite of 169 requests with 0 failures, and 6 of 6 Playwright end-to-end tests passing.',
    ],
    tags: ['Java', 'Spring Boot', 'FastAPI', 'GraphQL', 'PostgreSQL', 'React.js', 'Pub/Sub', 'Kubernetes'],
    repo: 'https://github.com/Perficient-Corporate/GGTP_BLR_PD_SEP_26/tree/jyothish/Projects/Individual/Jyothish-Boyina/Week%205/Capstone%205',
    demo: '',
  },
  {
    title: 'PageTurn',
    kind: 'E-commerce platform',
    cats: ['Full-stack', 'Java'],
    description:
      'Bookstore and stationery e-commerce platform for the Indian market: a React app on a Spring Boot REST API with PostgreSQL.',
    image: `${base}projects/pageturn.jpg`,
    points: [
      'Prices, GST, stock and order states are computed on the server; the browser is treated as untrusted.',
      'Short-lived 15-minute JWT access tokens kept in memory, with an HttpOnly refresh cookie.',
      'Atomic stock reservation, with an automatic 60-second cancellation window that restores stock.',
    ],
    tags: ['Java 21', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'JWT', 'React.js', 'Docker'],
    repo: 'https://github.com/Perficient-Corporate/GGTP_BLR_PD_SEP_26/tree/jyothish/Projects/Individual/Jyothish-Boyina/Week%204/Capstone%204',
    demo: '',
  },
  {
    title: 'MindMate',
    kind: 'AI chatbot',
    cats: ['AI / ML', 'Full-stack'],
    description:
      'AI-powered mental health assistant enabling personalized, context-aware conversations with Flask and React.',
    image: `${base}projects/mindmate.jpg`,
    date: 'Nov 2024',
    points: [
      'Integrated RAG and MongoDB-based chat history management, improving response relevance by ~30%.',
      'Implemented crisis detection, SOS support and PHQ-9 assessment workflows, enhancing risk identification accuracy by ~85%.',
      'Applied secure authentication and REST APIs to deliver a scalable and maintainable chatbot solution.',
    ],
    tags: ['Python', 'Flask', 'React.js', 'MongoDB', 'OpenAI API', 'RAG'],
    repo: 'https://github.com/JyothishBoyina/MindMate-AI-chatbot-backend',
    demo: '',
  },
  {
    title: 'Stock Price Prediction',
    kind: 'ML forecasting app',
    cats: ['AI / ML'],
    description:
      'LSTM-based stock forecasting application using historical market data and technical indicators like SMA and EMA.',
    image: `${base}projects/stock-price-prediction.jpg`,
    date: 'Apr 2025',
    points: [
      'Achieved 92% directional accuracy through SMA and EMA feature engineering, improving prediction reliability by ~18%.',
      'Designed interactive dashboards using Chart.js, reducing data interpretation time by ~40%.',
      'Optimized pretrained models and hyperparameters, decreasing prediction latency by ~35%.',
    ],
    tags: ['Python', 'Flask', 'TensorFlow', 'LSTM', 'Pandas', 'scikit-learn', 'Chart.js'],
    repo: 'https://github.com/JyothishBoyina/stock',
    demo: '',
  },
  {
    title: 'Food Dhuniya',
    kind: 'Full-stack web app',
    cats: ['Full-stack', 'Java'],
    description:
      'Full-stack food ordering platform with JWT authentication, role-based access control, and optimized REST APIs.',
    image: `${base}projects/food-dhuniya.jpg`,
    date: 'Feb 2026',
    points: [
      'Implemented JWT authentication and RBAC, reducing unauthorized access risks by ~90%.',
      'Designed optimized database schemas and REST APIs, improving query performance by ~30%.',
      'Integrated frontend and backend modules, reducing response times by ~25%.',
    ],
    tags: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'MySQL', 'React.js', 'Material UI', 'Docker'],
    repo: 'https://github.com/JyothishBoyina/Food-Dhuniya',
    demo: '',
  },
  {
    title: 'Bank Management System',
    kind: 'Java desktop app',
    cats: ['Java'],
    description:
      'Object-oriented banking application built using Java and JDBC, supporting deposits, withdrawals, cash and PIN management with strong validation.',
    image: `${base}projects/bank-management-system.jpg`,
    tags: ['Java', 'JDBC', 'MySQL', 'OOPs'],
    repo: 'https://github.com/JyothishBoyina/BankManagementSystem',
    demo: '',
  },
]
