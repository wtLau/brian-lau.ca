import { render, screen } from '@testing-library/react'
import * as React from 'react'

import Gears from '@pages/gears'

describe('Gears Page', () => {
  it('should render default', () => {
    render(<Gears />)

    expect(screen.getByRole('heading', { name: 'Gears' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Coding' })).toBeInTheDocument()
  })
})
