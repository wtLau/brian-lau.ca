export type resourceType = {
  id: number
  title: string
  url: string
  author: string | string[]
  summary: string
  type: 'blog' | 'article' | 'book' | 'video' | 'tweet' | 'people'
  tags?:
    | 'front end development'
    | 'software development'
    | 'system designs'
    | 'productivity'
    | 'software career'
  recommended?: boolean
}

export const resources: resourceType[] = [
  {
    id: 9,
    title: 'nemil',
    summary: 'Tech. Career. Crypto.',
    author: 'nemil',
    type: 'blog',
    tags: 'software career',
    url: 'https://nemil.com/tags/notes-to-a-young-software-engineer/',
  },
  {
    id: 8,
    title: 'Not Only Code',
    summary: 'Tech. Career. Leadership.',
    author: 'Gregory',
    type: 'blog',
    tags: 'software career',
    url: 'https://www.notonlycode.org/',
    recommended: true,
  },
  {
    id: 7,
    title: 'Kent C. Dodds',
    summary: 'One stop shop for everything you need to build JavaScript apps.',
    author: 'Kent C. Dodds',
    type: 'blog',
    tags: 'front end development',
    url: 'https://kentcdodds.com/',
    recommended: true,
  },
  {
    id: 6,
    title: 'Lee Robinson – Developer, writer, creator.',
    summary: '',
    author: 'Lee Robinson',
    type: 'blog',
    tags: 'front end development',
    url: 'https://leerob.io/',
  },
  {
    id: 5,
    title: 'Overreacted — A blog by Dan Abramov',
    summary: '',
    author: 'Dan Abramov',
    type: 'blog',
    tags: 'front end development',
    url: 'https://overreacted.io/',
  },
  {
    id: 4,
    title: "Don't Call Yourself A Programmer, And Other Career Advice",
    summary: '',
    author: 'Patrick McKenzie',
    type: 'article',
    url: 'https://www.kalzumeus.com/2011/10/28/dont-call-yourself-a-programmer/',
  },

  {
    id: 3,
    title: 'How to apply SOLID principles in React applications',
    summary: '',
    author: 'Tomas Gold',
    type: 'article',
    url: 'https://medium.com/@tomgold_48918/how-to-apply-solid-principles-in-react-applications-6c964091a982',
  },
  {
    id: 2,
    title: 'The Pragmatic Programmer',
    summary: 'The #1 newsletter for engineering managers and senior engineers',
    author: 'Gergely Orosz',
    type: 'blog',
    url: 'https://blog.pragmaticengineer.com/',
    recommended: true,
  },
  {
    id: 1,
    title: 'Eloquent JavaScript',
    summary: '',
    author: 'Marijin Haverbeke',
    type: 'book',
    url: 'https://eloquentjavascript.net/Eloquent_JavaScript.pdf',
  },
]
