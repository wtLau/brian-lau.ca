import { render, screen } from '@testing-library/react'
import * as React from 'react'

import MiniApps from '@pages/mini-apps'

describe('<CompanyCard />', () => {
  it('should render default', () => {
    render(<MiniApps apps={[{ slug: 'slug', title: ' title' }]} />)

    expect(screen.getByText('title')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'title' })).toHaveAttribute(
      'href',
      '/mini-apps/slug'
    )
  })
  it('should render nothing found', () => {
    render(<MiniApps apps={[]} />)

    expect(
      screen.getByText(
        'No app found. Please let me know if you are interested to learn more about it.'
      )
    ).toBeInTheDocument()
  })
})
