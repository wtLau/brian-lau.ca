import { render, screen } from '@testing-library/react'
import * as React from 'react'

import PageLayout from './PageLayout'

describe('<PageLayout />', () => {
  it('should render default', () => {
    render(
      <PageLayout title='title' description='description'>
        <p>children text</p>
      </PageLayout>
    )

    expect(screen.getByRole('heading', { name: 'title' })).toBeInTheDocument()
    expect(screen.getByText('description')).toBeInTheDocument()
    expect(screen.getByText('children text')).toBeInTheDocument()
  })
})
