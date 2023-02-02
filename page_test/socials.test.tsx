import { render, screen } from '@testing-library/react'
import * as React from 'react'

import Socials from '@pages/socials'

describe('<Socials />', () => {
  it('should render default', () => {
    render(<Socials />)

    expect(screen.getByText('Socials')).toBeInTheDocument()
  })
})
