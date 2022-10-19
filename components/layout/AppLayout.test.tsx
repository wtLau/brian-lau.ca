import { render, screen } from '@testing-library/react'
import * as React from 'react'

import AppLayout from './AppLayout'

describe('<AppLayout />', () => {
  it('should render default', () => {
    render(
      <AppLayout>
        <p>children text</p>
      </AppLayout>
    )

    expect(screen.getByText('children text')).toBeInTheDocument()
  })
})
