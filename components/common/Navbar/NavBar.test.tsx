import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import * as React from 'react'
import NavBar from './NavBar'

describe('<NavBar />', () => {
  it('should render default', () => {
    render(<NavBar />)

    expect(screen.getByRole('link', { name: 'Brian Lau' })).toHaveAttribute(
      'href',
      '/'
    )
  })
  it('Mobile - Drawer menu', () => {
    render(
      <div style={{ width: '200px' }}>
        <NavBar />
      </div>
    )

    expect(screen.getByRole('link', { name: 'Brian Lau' })).toBeInTheDocument()
    const menuBtn = screen.getByRole('button', { name: 'open drawer' })
    fireEvent.click(menuBtn)
    expect(screen.getByRole('link', { name: 'Blog' })).toHaveAttribute(
      'href',
      '/blog'
    )
  })
})
