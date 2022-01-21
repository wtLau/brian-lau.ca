import * as React from 'react'
import { render, screen } from '@testing-library/react'
import ColumnListItem from '.'

describe('<ColumnListItem />', () => {
  it('should render default', () => {
    render(<ColumnListItem title='title' />)

    expect(screen.getByText('title')).toBeInTheDocument()
  })

  it('should render with description', () => {
    render(<ColumnListItem description='description' title='title' />)

    expect(screen.getByText('title')).toBeInTheDocument()
    expect(screen.getByText('description')).toBeInTheDocument()
  })
})
