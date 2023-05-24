import { URL } from 'url'

export interface GearType {
  type: 'Coding' | 'Software' | 'Work Station' | 'Audio' | 'Misc'
  name: string
  link?: string | URL
  legacy?: boolean
}

const toolsData: GearType[] = [
  {
    type: 'Coding',
    name: 'VS Code - Code Editor',
  },
  {
    type: 'Coding',
    name: 'Vim - VS Code Extension',
  },
  {
    type: 'Coding',
    name: 'Warp - The terminal for the 21st century',
  },
  {
    type: 'Software',
    name: 'YouTube Premium - Video & Music',
  },
  {
    type: 'Software',
    name: 'Google Drive - Cloud Storage',
  },
  {
    type: 'Software',
    name: 'Notion - Note Taking',
  },
  { type: 'Software', name: 'Bitwarden - Password Manager' },
  { type: 'Software', name: 'Raycast - Productivity Supercharged' },
  { type: 'Work Station', name: '16" Macbook Pro - M1 Max' },
  { type: 'Work Station', name: '31.5" LG UltraFine 32UN650W' },
  {
    type: 'Work Station',
    name: 'Moonlander Ergo Keyboard',
    link: 'https://configure.zsa.io/moonlander/layouts/7VvEw/latest/0',
  },
  { type: 'Work Station', name: 'C920s PRO HD WEBCAM' },
  { type: 'Work Station', name: 'G305 Wireless Mouse' },
  { type: 'Work Station', name: 'Presonus C3.5 BT Channel Studio Monitor' },
  { type: 'Work Station', name: 'Ikea Bekant Desk' },
  { type: 'Work Station', name: 'Steelcase Leap V2 Chair' },
  { type: 'Work Station', name: 'VariDesk® Pro Plus™ 48"' },
  { type: 'Audio', name: 'Behringer Xm8500 Microphone' },
  { type: 'Audio', name: 'Focusrite Scarlett Solo Audio Interface' },
  { type: 'Audio', name: 'Bose QuietComfort 35' },
  { type: 'Audio', name: 'Huawei Earbud' },
  { type: 'Misc', name: 'Huawei P30 Pro' },
]

export default toolsData
