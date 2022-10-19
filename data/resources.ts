export type resourceType = {
  id: number
  title: string
  url: string
  author: string | string[]
  type: 'blog' | 'article' | 'book' | 'video' | 'tweet' | 'people'
  tags?:
    | 'front end development'
    | 'software development'
    | 'system designs'
    | 'productivity'
  recommended?: boolean
}

export const resources: resourceType[] = [
  {
    id: 7,
    title: 'Kent C. Dodds',
    author: 'Kent C. Dodds',
    type: 'blog',
    tags: 'front end development',
    url: 'https://kentcdodds.com/',
    recommended: true,
  },
  {
    id: 6,
    title: 'Lee Robinson – Developer, writer, creator.',
    author: 'Lee Robinson',
    type: 'blog',
    tags: 'front end development',
    url: 'https://leerob.io/',
    recommended: true,
  },
  {
    id: 5,
    title: 'Overreacted — A blog by Dan Abramov',
    author: 'Dan Abramov',
    type: 'blog',
    tags: 'front end development',
    url: 'https://overreacted.io/',
    recommended: true,
  },
  {
    id: 4,
    title: "Don't Call Yourself A Programmer, And Other Career Advice",
    author: 'Patrick McKenzie',
    type: 'article',
    url: 'https://www.kalzumeus.com/2011/10/28/dont-call-yourself-a-programmer/',
  },

  {
    id: 3,
    title: 'How to apply SOLID principles in React applications',
    author: 'Tomas Gold',
    type: 'article',
    url: 'https://medium.com/@tomgold_48918/how-to-apply-solid-principles-in-react-applications-6c964091a982',
  },
  {
    id: 2,
    title: 'The Pragmatic Programmer',
    author: ['David Thomas', 'Andrew Hunt'],
    type: 'book',
    url: 'https://pragprog.com',
    recommended: true,
  },
  {
    id: 1,
    title: 'Eloquent JavaScript',
    author: 'Marijin Haverbeke',
    type: 'book',
    url: 'https://eloquentjavascript.net/Eloquent_JavaScript.pdf',
    recommended: true,
  },
]
