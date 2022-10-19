import { render, screen } from '@testing-library/react'
import * as React from 'react'

import CompanyCard from '.'

const mockCompany = {
  name: 'data.ai',
  imageLocation: '/static/images/company/dataai_logo.png',
  imageAlt: 'logo',
  title: 'Front-End Developer',
  description:
    'data.ai Ascend. Manage, enrich and identify hidden performance opportunities across your own advertising and monetization data. Access intuitive dashboards, advanced normalization tools, and data from 400+ partner connections — all in one place. Get Ascend for free.',
  link: 'https://www.data.ai',
  current: true,
}

describe('<CompanyCard />', () => {
  it('should render default', () => {
    render(<CompanyCard company={mockCompany} />)

    expect(screen.getByText('data.ai')).toBeInTheDocument()
    expect(screen.getByText('Front-End Developer')).toBeInTheDocument()
  })
})
