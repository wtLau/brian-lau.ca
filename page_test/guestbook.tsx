import { render, screen } from '@testing-library/react'
import * as React from 'react'

import GuestBook from '@pages/guestbook'

describe('<GuestBook />', () => {
  it('should render default', () => {
    render(<GuestBook />)

    expect(screen.getByText('Guest Book')).toBeInTheDocument()
  })
})
