export type CompanyType = {
  name: string
  imageLocation: string
  imageAlt: string
  title: string
  description: string
  link: string
  current?: boolean
}

export const companyData: CompanyType[] = [
  {
    name: 'data.ai',
    imageLocation: '/static/images/company/dataai_logo.png',
    imageAlt: 'logo',
    title: 'Front-End Developer',
    description:
      'data.ai Ascend. Manage, enrich and identify hidden performance opportunities across your own advertising and monetization data. Access intuitive dashboards, advanced normalization tools, and data from 400+ partner connections — all in one place. Get Ascend for free.',
    link: 'https://www.data.ai',
    current: true,
  },
  {
    name: 'Spinndle',
    imageLocation: '/static/images/company/spinndle_logo.png',
    imageAlt: 'logo',
    title: 'Front-End Developer',
    description:
      "Use Spinndle's competency-based learning software to keep track of student-driven inquiry, PBL, personal projects and more. The project management tool allows gifted and IB students to manage their projects more independently through ongoing collaboration, reflection and revision.",
    link: 'https://spinndle.com/',
  },
  {
    name: 'Hanson Robotics Inc.',
    imageLocation: '/static/images/company/hansonroboticslogo.png',
    imageAlt: 'hanson robotics logo',
    title: 'Robot Opeator',
    description:
      'We bring robots to life. Hanson Robotics is an AI and robotics company dedicated to creating socially intelligent machines that enrich the quality of our lives.',
    link: 'https://www.hansonrobotics.com',
  },
  {
    name: 'Direct Focus Online',
    imageLocation: '/static/images/company/dfologo.png',
    imageAlt: 'DFO logo',
    description:
      "DFO Global. Marketing Built to Perform. We're using media, technology, machine learning, and more to generate billions of global eCommerce sales.",
    link: 'https://www.linkedin.com/company/direct-focus-online/',
    title: 'Front-End Developer',
  },
  {
    name: 'South Granville Seniors Centre',
    imageLocation: '/static/images/company/sgscLogo.png',
    imageAlt: 'South Granville Seniors Centre logo',
    link: 'http://southgranvilleseniors.ca/',
    description:
      'South Granville Seniors Centre Serving our community since 1979. Mission Statement. Our mission is to work with seniors to support their health and independence through programs and activities that recognize diversity and individual worth, while promoting well-being and friendship.',
    title: 'Front-End Developer',
  },
  {
    name: 'The Green Moustache Cafe',
    imageLocation: '/static/images/company/greenMoustacheLogo.jpg',
    imageAlt: 'The Green Moustachelogo',
    description:
      "At The Green Moustache Organic Café our delicious recipes, the ingredients we use, the way we cook our food, are all designed to help you achieve optimal health and vitality, without sacrificing flavour. Whether it's our hearty Veggie Stew, our tasty Liquid Gold Dressing or our decadent Chocolate Brownie, we know how to make healthy taste good.",
    link: 'https://www.linkedin.com/company/the-green-moustache/',
    title: 'Front-End Developer',
  },
]
