import { render, screen } from '@testing-library/react'
import * as React from 'react'

import BlogLayout from './BlogLayout'

const frontMatterData = {
  title: 'Code Reviews',
  publishedAt: '2022-07-19',
  summary: '',
  image: '',
  image_alt: '',
  categories: ['process'],
  slug: 'code-review',
  wordCount: 2000,
  readingTime: {
    text: '6 min read',
    minutes: 5.615,
    time: 336900,
    words: 1123,
  },
}

describe('<BlogLayout />', () => {
  it('should render default', () => {
    render(
      <BlogLayout frontMatter={frontMatterData}>
        <p>children text</p>
      </BlogLayout>
    )

    expect(
      screen.getByRole('heading', { name: 'Code Reviews' })
    ).toBeInTheDocument()
    expect(screen.getByText('6 min read')).toBeInTheDocument()
    expect(screen.getByText('children text')).toBeInTheDocument()
  })
})
