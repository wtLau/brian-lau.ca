import { render, screen } from '@testing-library/react'
import * as React from 'react'

import Footer from './Footer'

describe('<Footer />', () => {
  it('should render default', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'GitHub' })).toBeInTheDocument()
  })
})
