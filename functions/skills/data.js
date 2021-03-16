const data = [
  {
    name: 'JavaScript',
    type: 'Language',
    shorthand: 'JS',
    fullname: 'ECMAScript',
    proficiency: 90,
    description: 'JavaScript is a programming langugage',
    url: 'https://www.javascript.com/',
  },

  {
    name: 'Node JS',
    shorthand: 'node',
    fullname: 'Node.js',
    type: 'Library/Framework',
    proficiency: 60,
    description:
      "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
    url: 'https://nodejs.org/',
  },

  {
    name: 'React JS',
    shorthand: 'React',
    fullname: 'React.js',
    type: 'Library/Framework',
    proficiency: 80,
    description: 'React is a JavaScript library for building user interfaces',
    url: 'https://reactjs.org/',
  },

  {
    name: 'HTML5',
    type: 'Markup',
    shorthand: 'HTML',
    fullname: 'hypertext markup language',
    proficiency: 90,
    description:
      'HTML (HyperText Markup Language) is the most basic building block of the Web',
    url: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
  },

  {
    name: 'CSS',
    type: 'Style',
    shorthand: 'CSS',
    fullname: 'Cascading Style Sheets',
    proficiency: 100,
    description:
      'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.',
    url: 'https://www.w3.org/Style/CSS/Overview.en.html',
  },

  {
    name: 'SASS',
    type: 'Style',
    shorthand: 'SASS',
    fullname: 'syntactically awesome style sheets',
    proficiency: 80,
    description:
      'Sass (short for syntactically awesome style sheets) is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). ',
    url: 'https://sass-lang.com/',
  },

  {
    name: 'PHP',
    type: 'Langugage',
    shorthand: 'PHP',
    fullname: 'Hypertext Preprocessor',
    proficiency: 30,
    description:
      'PHP is a popular general-purpose scripting language that is especially suited to web development.',
    url: 'https://www.php.net/',
  },

  {
    name: 'Redux',
    type: 'Library/Framework',
    fullname: 'Redux JS',
    shorthand: 'Redux',
    proficiency: 60,
    description: 'A Predictable State Container for JS Apps',
    url: 'https://redux.js.org/',
  },

  {
    name: 'React Redux',
    type: 'Library/Framework',
    fullname: 'React Redux JS',
    shorthand: 'React Redux',
    proficiency: 60,
    description: 'React Redux is the official React binding for Redux.',
    url: 'https://react-redux.js.org/',
  },

  {
    name: 'Express Js',
    type: 'Library/Framework',
    fullname: 'Express JS',
    shorthand: 'Express',
    proficiency: 30,
    description: 'Fast, unopinionated, minimalist web framework for Node.js',
    url: 'https://expressjs.com/',
  },

  {
    name: 'GIT',
    type: 'Version Control ',
    fullname: 'GIT',
    shorthand: 'GIT',
    proficiency: 80,
    description:
      'Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.',
    url: 'https://git-scm.com/',
  },

  {
    name: 'GitHub',
    type: 'Version Control ',
    fullname: 'GitHub, Inc.',
    shorthand: 'GitHub',
    proficiency: 90,
    description:
      'GitHub—the largest and most advanced development platform in the world.',
    url: 'https://github.com/',
  },

  {
    name: 'REST API',
    type: 'API',
    fullname: 'Representational state transfer',
    shorthand: 'REST',
    proficiency: 55,
    description:
      'Representational state transfer (REST) is a software architectural style that defines a set of constraints to be used for creating Web services. ',
    url: null,
  },

  {
    name: 'GraphQL',
    type: 'API',
    fullname: 'GraphQL',
    shorthand: 'GraphQL',
    proficiency: 20,
    description:
      'GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.',
    url: 'https://graphql.org/',
  },

  {
    name: 'WordPress',
    type: 'CMS',
    fullname: 'WordPress.org',
    shorthand: 'WP',
    proficiency: 60,
    description:
      'WordPress (WP, WordPress.org) is a free and open-source content management system (CMS) written in PHP[4] and paired with a MySQL or MariaDB database.',
    url: 'https://wordpress.com/',
  },

  {
    name: 'NPM',
    type: 'Package Manager',
    fullname: 'NPM JS',
    shorthand: 'NPM',
    proficiency: 80,
    description: `We"re npm, Inc., the company behind Node package manager, the npm Registry, and npm CLI.`,
    url: 'https://www.npmjs.com/',
  },

  {
    name: 'Fauna',
    type: 'API',
    fullname: 'Fauna DB',
    shorthand: 'Fauna',
    proficiency: 10,
    description:
      'Fauna is a flexible, developer-friendly, transactional database delivered to you as a secure, web-native API.',
    url: 'https://fauna.com/',
  },

  {
    name: 'Material UI',
    type: 'Style',
    fullname: 'MATERIAL-UI',
    shorthand: 'Material UI',
    proficiency: 80,
    description:
      'React components for faster and easier web development. Build your own design system, or start with Material Design.',
    url: 'https://material-ui.com/',
  },

  {
    name: 'Google Cloud Platform',
    type: 'Hosting',
    fullname: 'Google Cloud Platform',
    shorthand: 'GCP',
    proficiency: 5,
    description:
      'Google Cloud Platform, offered by Google, is a suite of cloud computing services that runs on the same infrastructure that Google uses internally for its end-user products, such as Google Search, Gmail, file storage, and YouTube. ',
    url: 'https://cloud.google.com/',
  },

  {
    name: 'Figma',
    type: 'Design',
    fullname: 'Figma',
    shorthand: 'figma',
    proficiency: 70,
    description:
      'Figma is a vector graphics editor and prototyping tool which is primarily web-based, with additional offline features enabled by desktop applications for macOS and Windows.',
    url: 'https://www.figma.com/',
  },

  {
    name: 'Sketch',
    type: 'Design',
    fullname: 'Sketch',
    shorthand: 'sketch',
    proficiency: 50,
    description:
      'Sketch is a design toolkit built to help you create your best work — from your earliest ideas, through to final artwork.',
    url: 'https://www.sketch.com/',
  },

  {
    name: 'Photoshop',
    type: 'Design',
    fullname: 'Adobe Photoshop',
    shorthand: 'PS',
    proficiency: 30,
    description:
      'Adobe Photoshop is a raster graphics editor developed and published by Adobe Inc',
    url: 'https://www.adobe.com/ca/products/photoshop.html',
  },

  {
    name: 'Lightroom',
    type: 'Design',
    fullname: 'Adobe Lightroom',
    shorthand: 'LR',
    proficiency: 95,
    description:
      'Lightroom is the cloud-based service that gives you everything you need to create, edit, organize, store, and share your photos across any device.',
    url: 'https://www.adobe.com/ca/products/photoshop-lightroom.html',
  },
]
