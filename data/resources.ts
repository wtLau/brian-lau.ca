type mediaType = 'podcast' | 'blog' | 'book' | 'video' | 'tweet'

type tagsType =
  | 'front-end development'
  | 'software development' // Anything the goes beyond frontend development
  | 'system designs'
  | 'productivity'
  | 'software career'
  | 'emotional health'
  | 'software industry'
  | 'engineering management'

export type resourceType = {
  id: number
  title: string
  url: string
  author: string | string[]
  summary: string
  type: mediaType
  tags: tagsType
  recommended?: boolean
  collection?: boolean // if this is an collection of mediaType
}

/* Copy this template for new entries */
// {
//   id:,
//   title: '',
//   summary: "",
//   author: "",
//   type: '',
//   tags: '',
//   url: '',
//   collection: false,
//   recommended: false,
// },

export const resources: resourceType[] = [
  {
    id: 16,
    title: 'Kun the Engineer',
    summary:
      "Kun a partner level software engineer at Microsoft; ex-Meta. He've gathered interesting learnings as he navigated his career in the tech industry and he'd love to share them with us in case they can be helpful.",
    author: 'Kun Chen',
    type: 'video',
    tags: 'software career',
    url: 'https://www.youtube.com/@kunchenxyz/videos',
    collection: true,
    recommended: false,
  },
  {
    id: 15,
    title: 'Front End Happy Hour',
    summary:
      'A software engineering podcast featuring a panel of Software Engineers from Netflix, Twitch, & Atlassian talking over drinks about Frontend, JavaScript, and career development.',
    author: [
      'Ryan Burgess',
      'Jem Young',
      'Stacy London',
      'Augustus Yuan',
      'Mars Jullian',
      'Shirley Wu',
    ],
    type: 'podcast',
    tags: 'front-end development',
    url: 'https://www.frontendhappyhour.com/',
    collection: true,
    recommended: false,
  },
  {
    id: 14,
    title: 'Managing Up',
    summary:
      'Management tips, stories, and interviews to help navigate the challenges of managing creative and technical teams.',
    author: ['Travis Swicegood', 'Brandon Hays', 'Nickolas Means'],
    type: 'podcast',
    tags: 'engineering management',
    url: 'https://www.managingup.show/',
    collection: true,
    recommended: false,
  },
  {
    id: 13,
    title: 'NDC Conferences',
    summary:
      'NDC is Europe’s one of largest software conferences. I really enjoy the quality of the talks presented here',
    author: 'NDC Conference',
    type: 'video',
    tags: 'software development',
    url: 'https://www.youtube.com/@NDC',
    collection: true,
    recommended: false,
  },
  {
    id: 12,
    title: 'A Life Engineered',
    summary:
      'The mission of A Life Engineered is to help software and other knowledge workers achieve their career and lifestyle goals by taking a strategic approach to their careers.  Software engineers have the unique opportunity to reach financial freedom in a short amount of time within the safety of a corporate environment.  All it takes is a structured approach.',
    author: 'Steve Huynh',
    type: 'video',
    tags: 'software career',
    url: 'https://www.youtube.com/@ALifeEngineered',
    collection: true,
    recommended: false,
  },
  {
    id: 11,
    title: 'The Deliberate Engineer',
    summary:
      'Another phonomenal engineer sharing his experiences and careers. Please watch a few videos from John, its worth the time!',
    author: 'John L. Miller',
    type: 'video',
    collection: true,
    tags: 'software career',
    url: 'https://www.youtube.com/@TheDeliberateEngineer/',
  },
  {
    id: 10,
    title:
      'Imposter Syndrome: Overcoming Self-Doubt in Success - Heather Downing - NDC Oslo 2023',
    summary:
      'Everyone has impostor syndrome and it is real. Know about it. Learn to work with it. And if you can, help others to deal with it. This hour long talk is insightful to know that I am not the only imposter out there!',
    author: ['Heather Downing', 'NDC Conference'],
    type: 'video',
    tags: 'emotional health',
    url: 'https://www.youtube.com/watch?v=atYHKU0VJQE',
  },
  {
    id: 9,
    title: 'nemil',
    summary:
      "I really liked the 'notes to a young software engineer' series. I am sure you'll learn a few things reading them.",
    author: 'nemil',
    type: 'blog',
    tags: 'software career',
    url: 'https://nemil.com/tags/notes-to-a-young-software-engineer/',
    collection: true,
  },
  {
    id: 8,
    title: 'Not Only Code',
    summary:
      'Gregory gives valueable and actionable long-term not-only-code advices. I reach out to him for occasional mentorship and coaching. Highly recommended to check out his thoughts on growing professionally in the software space',
    author: 'Gregory',
    type: 'blog',
    tags: 'software career',
    url: 'https://www.notonlycode.org/',
    recommended: true,
    collection: true,
  },
  {
    id: 7,
    title: 'Kent C. Dodds',
    summary:
      'Big avocates on Remix, React and testing. He has a lot of great advice on how to build JavaScript apps.',
    author: 'Kent C. Dodds',
    type: 'blog',
    tags: 'front-end development',
    url: 'https://kentcdodds.com/blog',
    recommended: true,
    collection: true,
  },
  {
    id: 6,
    title: 'Lee Robinson',
    summary:
      'Developer, writer, creator. Lee is VP of DX at Vercel. He inspired me to build my own website using Next.js because it is really cool.',
    author: 'Lee Robinson',
    type: 'blog',
    tags: 'front-end development',
    url: 'https://leerob.io/blog',
    collection: true,
  },
  {
    id: 5,
    title: 'Dan Abramov',
    summary:
      'Dan is one of the core contributor to the frontend library - React. Great content with fabulous writing style',
    author: 'Dan Abramov',
    type: 'blog',
    tags: 'front-end development',
    url: 'https://overreacted.io/',
    collection: true,
  },
  {
    id: 4,
    title: "Don't Call Yourself A Programmer, And Other Career Advice",
    summary:
      'This blog outline the tradeoffs between work life balance. Design your career with intentions.',
    author: 'Patrick McKenzie',
    type: 'blog',
    url: 'https://www.kalzumeus.com/2011/10/28/dont-call-yourself-a-programmer/',
    tags: 'software career',
  },
  {
    id: 3,
    title: 'How to apply SOLID principles in React applications',
    summary: 'Applying a software engineering concept in React code',
    author: 'Tomas Gold',
    type: 'blog',
    url: 'https://medium.com/@tomgold_48918/how-to-apply-solid-principles-in-react-applications-6c964091a982',
    tags: 'front-end development',
  },
  {
    id: 2,
    title: 'The Pragmatic Programmer',
    summary: 'The newsletter for engineering managers and senior engineers',
    author: 'Gergely Orosz',
    type: 'blog',
    tags: 'software industry',
    url: 'https://blog.pragmaticengineer.com/',
    recommended: true,
    collection: true,
  },
  {
    id: 1,
    title: 'Eloquent JavaScript',
    summary: 'The book you must read if you use JavaScript on a regular basis',
    author: 'Marijin Haverbeke',
    type: 'book',
    url: 'https://eloquentjavascript.net/Eloquent_JavaScript.pdf',
    tags: 'front-end development',
  },
]
