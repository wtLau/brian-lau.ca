import { render, screen } from '@testing-library/react'
import * as React from 'react'

import NotFound from '@pages/404'

describe('<404 />', () => {
  it('should render default', () => {
    render(<NotFound />)

    expect(screen.getByText('Wrong page')).toBeInTheDocument()
  })
})
