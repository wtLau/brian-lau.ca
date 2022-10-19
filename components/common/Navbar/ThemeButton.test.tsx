import { render, screen } from '@testing-library/react'

import ThemeButton from './ThemeButton'

describe('ThemeButton', () => {
  it('test light/dark button', () => {
    render(<ThemeButton />)

    const button = screen.getByRole('button', { name: 'Toggle theme' })
    expect(button).toBeInTheDocument()
  })
})
