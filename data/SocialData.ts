import { Url } from 'url'
type SocialData = {
  name: string
  link: string
  description: string
}

export const SocialData: SocialData[] = [
  {
    name: 'GitHub',
    link: 'https://www.github.com/wtlau',
    description: 'A place where my collection of codes live. (including mine)',
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/brian-lau/',
    description: 'A place for connecting with professional.',
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/brian_wtLau',
    description: 'A place where I share my (unfilterd) thoughts.',
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/wtlau.raw/',
    description: 'Where I share my public photographies.',
  },
  {
    name: 'ADPList',
    link: 'https://adplist.org/mentors/brian-lau',
    description: 'Book a session with me! Free and accessible mentorship.',
  },
  {
    name: 'YouTube (coming soon)',
    link: 'https://www.youtube.com/channel/UC2wP2VVjty2IaQYx8GYizeQ',
    description: 'Where I share my talks and pour-over videos',
  },
]
