import { render, screen } from '@testing-library/react'
import * as React from 'react'

import MiniApps from '@pages/mini-apps'

describe('<CompanyCard />', () => {
  it('should render default', () => {
    render(<MiniApps tools={[{ slug: 'slug', title: ' title' }]} />)

    expect(screen.getByText('title')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'title' })).toHaveAttribute(
      'href',
      '/mini-apps/slug'
    )
  })
})
