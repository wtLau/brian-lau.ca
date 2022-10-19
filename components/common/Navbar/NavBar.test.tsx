import { render, screen } from '@testing-library/react'
import * as React from 'react'

import NavBar from './NavBar'

describe('<NavBar />', () => {
  it('should render default', () => {
    render(<NavBar />)

    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: 150,
    })

    window.dispatchEvent(new Event('resize'))
    expect(screen.getByRole('link', { name: 'Brian Lau' })).toHaveAttribute(
      'href',
      '/'
    )
  })
})
